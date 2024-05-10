package com.petopia.service;

import com.petopia.domain.comment.Comment;
import com.petopia.domain.comment.CommentRepository;
import com.petopia.domain.post.Post;
import com.petopia.domain.user.User;
import com.petopia.domain.user.UserRepository;
import com.petopia.handler.ex.CustomApiException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    // 댓글 쓰기
    @Transactional
    public Comment commentCreate(String comment, int postId, int userId) {

        Post post = new Post();
        post.setId(postId);

        User userEntity = userRepository.findById(userId).orElseThrow(() -> {
            throw new CustomApiException("유저 아이디를 찾을 수 없습니다.");
        });

        Comment commentEntity = new Comment();
        commentEntity.setComment(comment);
        commentEntity.setPost(post);
        commentEntity.setUser(userEntity);

        return commentRepository.save(commentEntity);
    }

    // 댓글 삭제
    @Transactional
    public void commentDelete(int id) {
        commentRepository.deleteById(id);
    }
}
