package com.petopia.domain.pet;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PetRepository extends JpaRepository<Pet, Integer> {

    @Query(value = "SELECT * FROM Pet  WHERE userId=:userId ORDER BY id DESC", nativeQuery = true)
    Page<Pet> mList(Pageable pageable, @Param("userId") int userId);

    @Modifying
    @Query(value = "DELETE FROM Pet WHERE id=:petId AND userId =:userId", nativeQuery = true)
    void mDelete(@Param("petId")int petId, @Param("userId") int userId);
}
