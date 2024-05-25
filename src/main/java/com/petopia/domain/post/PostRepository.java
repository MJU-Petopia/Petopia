package com.petopia.domain.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query(value = "SELECT * FROM Post ORDER BY id DESC", nativeQuery = true)
    Page<Post> mList(Pageable pageable);

    @Modifying
    @Query(value = "DELETE FROM Post WHERE id=:postId AND userId =:userId", nativeQuery = true)
    void mDelete(@Param("postId")int postId, @Param("userId") int userId);
}
