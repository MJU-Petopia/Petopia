package com.petopia.controller;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.user.User;
import com.petopia.request.auth.SignupDto;
import com.petopia.request.user.UserUpdateDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody @Valid SignupDto signupDto, BindingResult bindingResult){
        User userEntity = userService.signup(signupDto);
        return new ResponseEntity<>(new CMRespDto<>(1, "회원가입 성공", userEntity), HttpStatus.CREATED);
    }

    // 회원 수정 api
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                                    @Valid UserUpdateDto userUpdateDto,
                                    BindingResult bindingResult,
                                    @AuthenticationPrincipal PrincipalDetails principalDetails) {

        User userEntity = userService.userEdit(id, userUpdateDto.toEntity());
        principalDetails.setUser(userEntity);
        return new ResponseEntity<>(new CMRespDto<>(1, "회원수정완료", userEntity), HttpStatus.OK);
    }
}
