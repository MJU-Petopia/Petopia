package com.petopia.controller;

import com.petopia.model.Member_test;
import com.petopia.repository.MemberRepository_test;
import com.petopia.service.MemberService_test;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class test {

    private final MemberService_test memberServiceTest;
    private final MemberRepository_test memberRepositoryTest;

    @PostMapping("/member/signup")
    public ResponseEntity<?> hello(Member_test memberTest) {
        memberServiceTest.signup(memberTest);
        return new ResponseEntity<>(memberTest, HttpStatus.OK);
    }

    @GetMapping("/hello")
    public ResponseEntity<?> one() {
        Member_test memberTest = memberRepositoryTest.findById(1).orElseThrow(() -> {
            throw new RuntimeException();
        });
        return new ResponseEntity<>(memberTest, HttpStatus.OK);
    }
}
