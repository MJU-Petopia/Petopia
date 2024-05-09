package com.petopia.service;

import com.petopia.domain.user.User;
import com.petopia.domain.user.UserRepository;
import com.petopia.handler.ex.CustomValidationApiException;
import com.petopia.request.auth.SignupDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //가입
    @Transactional
    public User signup(SignupDto signupDto) {
        String rawPassword = signupDto.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        signupDto.setPassword(encPassword);
        User userEntity = userRepository.save(signupDto.toEntity());
        return userEntity;
    }

    // 회원 정보 수정
    @Transactional
    public User userEdit(int id, User user){
        User userEntity = userRepository.findById(id).orElseThrow(() ->
        { return new CustomValidationApiException("찾을 수 없는 id입니다.");});

        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);

        userEntity.setName(user.getName());
        userEntity.setPassword(encPassword);
        userEntity.setPhone(user.getPhone());
        userEntity.setGender(user.getGender());

        return userEntity;
    }
}
