package com.petopia.domain.post;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.petopia.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String caption;
    private String content;

    @JsonIgnoreProperties({"posts"})
    @JoinColumn(name = "userId")
    @ManyToOne
    private User user;

//    @OrderBy("id DESC")
//    @JsonIgnoreProperties({"image"})
//    @OneToMany(mappedBy = "image")
//    private List<Comment> comments;

//    @Transient //DB에 컬럼이 만들어지지 않음
//    private boolean likeState;
//
//    @Transient
//    private int likeCount;

    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }
}
