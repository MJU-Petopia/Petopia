package com.petopia.domain.comment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.petopia.domain.post.Post;
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
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100, nullable = false)
    private String comment;

    @JoinColumn(name = "userId")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"posts"})
    private User user;

    @JoinColumn(name = "postId")
    @ManyToOne(fetch = FetchType.EAGER)
    private Post post;

    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }
}
