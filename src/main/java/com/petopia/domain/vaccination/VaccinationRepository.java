package com.petopia.domain.vaccination;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VaccinationRepository extends JpaRepository<Vaccination, Integer> {
    @Query(value = "SELECT * FROM Vaccination WHERE userId=:userId ORDER BY id DESC", nativeQuery = true)
    Page<Vaccination> mList(Pageable pageable, @Param("userId") int userId);
}
