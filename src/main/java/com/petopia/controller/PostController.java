package com.petopia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PostController {

    @GetMapping("/api/test")
    public String hello() {
        return "테스트입니다.";
    }
}
