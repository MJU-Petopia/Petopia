package com.petopia.controller;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.user.User;
import com.petopia.handler.ex.CustomValidationApiException;
import com.petopia.request.auth.SignupDto;
import com.petopia.request.user.UserUpdateDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 회원 가입
    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody @Valid SignupDto signupDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            throw new CustomValidationApiException("유효성 검사 실패", errorMap);
        } else {
            User user = signupDto.toEntity();
            userService.signup(user);
            return new ResponseEntity<>(new CMRespDto<>(1, "회원가입 성공", user), HttpStatus.CREATED);
        }
    }

    // 회원 수정
    @PatchMapping("{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                               @RequestBody UserUpdateDto userUpdateDto) {
        User userEntity = userService.userEdit(id, userUpdateDto.toEntity());
        return new ResponseEntity<>(new CMRespDto<>(1, "회원수정 성공", userEntity), HttpStatus.OK);
    }

    // 회원 탈퇴
    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        userService.userDelete(id);
        return new ResponseEntity<>(new CMRespDto<>(1, "회원 탈퇴 성공", null), HttpStatus.OK);
    }
}
