package com.petopia.controller;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.post.Post;
import com.petopia.request.post.PostUpdateDto;
import com.petopia.request.post.PostUploadDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;

    @GetMapping("/")
    public String hello() {
        return "메인화면";
    }

    // 글 작성
    @PostMapping("/api/post")
    public ResponseEntity<?> postCreate(@RequestBody PostUploadDto postUploadDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Post post = postService.postCreate(postUploadDto, principalDetails);
        return new ResponseEntity<>(new CMRespDto<>(1, "게시글 작성 완료",post), HttpStatus.CREATED);
    }

    // 모든 글 조회
    @GetMapping("/api/post")
    public ResponseEntity<?> postsRead(@PageableDefault(size = 3) Pageable pageable){
        Page<Post> posts = postService.postsRead(pageable);
        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", posts), HttpStatus.OK);
    }

    // 글 단건 조회
    @GetMapping("/api/post/{postId}")
    public ResponseEntity<?> postRead(@PathVariable int postId){
        Post post = postService.postRead(postId);
        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", post), HttpStatus.OK);
    }

    // 글 수정
    @PatchMapping("/api/post/{postId}")
    public ResponseEntity<?> postUpdate(@PathVariable int postId, @RequestBody PostUpdateDto postUpdateDto) {
        Post post = postService.postUpdate(postId, postUpdateDto);
        return new ResponseEntity<>(new CMRespDto<>(1, "수정 성공", post), HttpStatus.OK);
    }

    // 글 삭제
    @DeleteMapping("/api/post/{postId}")
    public ResponseEntity<?> postDelete(@PathVariable int postId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        postService.postDelete(postId, principalDetails.getUser().getId());
        return new ResponseEntity<>(new CMRespDto<>(1, "글 삭제 성공", null),HttpStatus.OK);
    }
}
