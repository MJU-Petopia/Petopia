package com.petopia.request.post;

import com.petopia.domain.post.Post;
import com.petopia.domain.user.User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class PostUploadDto {
//    private MultipartFile file;
    private String title;
    private String content;

    public Post toEntity(User user) {
        return Post.builder()
                .title(title)
                .content(content)
//                .postImageUrl(postImageUrl)
                .user(user)
                .build();

    }
}
