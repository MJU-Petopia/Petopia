package com.petopia.config;

import com.petopia.config.oauth.CustomOAuth2SuccessHandler;
import com.petopia.config.oauth.Oauth2DetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final Oauth2DetailsService oauth2DetailsService;
    @Bean
    public BCryptPasswordEncoder encode() {
        return new BCryptPasswordEncoder();

    }

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @Autowired
    private AuthenticationSuccessHandler customOAuth2SuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/").authenticated()
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .loginProcessingUrl("/auth/signin")
                .defaultSuccessUrl("/")
                .and()
                .oauth2Login()
                .successHandler(new CustomOAuth2SuccessHandler(authorizedClientService))
                .userInfoEndpoint() // oauth2 로그인을 하면 최종 응답으로 회원정보를 바로 받을 수 있다.
                .userService(oauth2DetailsService);
    }

}
