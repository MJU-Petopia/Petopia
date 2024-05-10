package com.petopia.service;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.post.Post;
import com.petopia.domain.post.PostRepository;
import com.petopia.handler.ex.CustomApiException;
import com.petopia.request.post.PostUpdateDto;
import com.petopia.request.post.PostUploadDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostService {

    @Value("${C:/Users/sunms/Desktop/project/photogram_image/}")
    private String filePath;
    private final PostRepository postRepository;

    // 글 작성
    @Transactional
    public Post postCreate(PostUploadDto postUploadDto, PrincipalDetails principalDetails) {
//        UUID uuid = UUID.randomUUID();
//        String imageFileName = uuid + "_" + postUploadDto.getFile().getOriginalFilename();
//        Path imageFilePath = Paths.get(filePath + imageFileName);
//
//        try {
//            Files.write(imageFilePath, postUploadDto.getFile().getBytes());
//        }catch (Exception e) {
//            e.printStackTrace();
//        }

        Post post = postUploadDto.toEntity(principalDetails.getUser());
        postRepository.save(post);
        return post;
    }

    // 모든 글 조회
    @Transactional(readOnly = true)
    public Page<Post> postsRead(Pageable pageable){
        Page<Post> posts = postRepository.mList(pageable);
        return posts;
    }

    // 글 단건 조회
    @Transactional(readOnly = true)
    public Post postRead(int postId){
        Post post = postRepository.findById(postId).orElseThrow(() -> new CustomApiException("글을 찾지 못했습니다."));
        return post;
    }

    // 글 수정
    @Transactional
    public Post postUpdate(int postId, PostUpdateDto postUpdateDto) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new CustomApiException("글을 찾지 못했습니다."));
        post.update(postUpdateDto.getTitle() != null ? postUpdateDto.getTitle() : post.getTitle(),
                postUpdateDto.getContent() != null ? postUpdateDto.getContent() : post.getContent());
        return post;
    }

    // 글 삭제
    @Transactional
    public void postDelete(int postId, int userId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new CustomApiException("글을 찾지 못했습니다."));
        postRepository.mDelete(post.getId(), userId);
    }
}