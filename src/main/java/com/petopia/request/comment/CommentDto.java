package com.petopia.request.comment;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class CommentDto {

    @NotBlank
    private String comment;
    @NotNull
    private Integer postId;
}
