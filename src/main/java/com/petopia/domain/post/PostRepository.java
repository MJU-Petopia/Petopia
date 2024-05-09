package com.petopia.domain.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query(value = "SELECT * FROM post WHERE userId IN (SELECT toUserId FROM subscribe WHERE fromUserId = :principalId) ORDER BY id DESC", nativeQuery = true)
    Page<Post> mStory(int principalId, Pageable pageable);

}
