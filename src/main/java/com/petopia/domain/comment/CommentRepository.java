package com.petopia.domain.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;


public interface CommentRepository extends JpaRepository<Comment, Integer> {

    void deleteByIdAndAndUserId(@Param("commentId") int commentId, @Param("userId") int userId);

}
