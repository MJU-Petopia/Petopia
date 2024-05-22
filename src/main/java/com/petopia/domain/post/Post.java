package com.petopia.domain.post;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.petopia.domain.comment.Comment;
import com.petopia.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String content;
    private String postImageUrl;

    @JsonIgnoreProperties({"posts", "pets", "vaccinations"})
    @JoinColumn(name = "userId")
    @ManyToOne
    private User user;

    @OrderBy("id DESC")
    @JsonIgnoreProperties({"post"})
    @OneToMany(mappedBy = "post")
    private List<Comment> comments;


    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }

    public void update(String title, String content /*, String postImageUrl*/) {
        this.title = title;
        this.content = content;
//        this.postImageUrl = postImageUrl;
    }
}
