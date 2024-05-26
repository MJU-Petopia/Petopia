package com.petopia.controller;

import com.petopia.domain.comment.Comment;
import com.petopia.request.comment.CommentDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

//    // 댓글 쓰기
//    @PostMapping("/api/comment")
//    public ResponseEntity<?> commentCreate(@Valid @RequestBody CommentDto commentDto, BindingResult bindingResult, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        Comment comment = commentService.commentCreate(commentDto.getComment(), commentDto.getPostId(), principalDetails.getUser().getId());
//        return new ResponseEntity<>(new CMRespDto<>(1, "댓글 쓰기 성공", comment), HttpStatus.CREATED);
//    }

    // 댓글 쓰기
    @PostMapping("/api/comment/userId={userId}")
    public ResponseEntity<?> commentCreate(@Valid @RequestBody CommentDto commentDto, BindingResult bindingResult, @PathVariable int userId) {
        Comment comment = commentService.commentCreate(commentDto.getComment(), commentDto.getPostId(), userId);
        return new ResponseEntity<>(new CMRespDto<>(1, "댓글 쓰기 성공", comment), HttpStatus.CREATED);
    }

    // 댓글 삭제
    @DeleteMapping("/api/comment/commentId={commentId}/userId={userId}")
    public ResponseEntity<?> commentDelete(@PathVariable int commentId, @PathVariable int userId) {
        commentService.commentDelete(commentId, userId);
        return new ResponseEntity<>(new CMRespDto<>(1, "댓글 삭제 성공", null), HttpStatus.OK);
    }

}
