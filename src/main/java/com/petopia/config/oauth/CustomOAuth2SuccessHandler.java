package com.petopia.config.oauth;

import com.petopia.config.auth.PrincipalDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CustomOAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final OAuth2AuthorizedClientService authorizedClientService;

    public CustomOAuth2SuccessHandler(OAuth2AuthorizedClientService authorizedClientService) {
        this.authorizedClientService = authorizedClientService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException {
        OAuth2AuthenticationToken authenticationToken = (OAuth2AuthenticationToken) authentication;

        String clientRegistrationId = authenticationToken.getAuthorizedClientRegistrationId();
        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                clientRegistrationId, authenticationToken.getName());

        OAuth2AccessToken accessToken = authorizedClient.getAccessToken();
        String tokenValue = accessToken.getTokenValue();

        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        int id = principal.getUser().getId();
        String username = principal.getUser().getUsername();
        String email = principal.getUser().getEmail();
        String gender = principal.getUser().getGender();
        String phone = principal.getUser().getPhone();


        String redirectUrl = "http://localhost:3000/verification&id=" + id + "&username=" + username + "&email=" + email + "&gender=" + gender + "&phone=" + phone;
        getRedirectStrategy().sendRedirect(request, response, redirectUrl);
    }
}
