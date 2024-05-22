package com.petopia.domain.vaccination;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.petopia.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Vaccination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //  1차 접종(예정 날짜)
//    @Column(nullable = false)
//    @JsonFormat(pattern = "yyyy-MM-dd")
//    private LocalDateTime startDay;
    @Column(nullable = false)
    private String startDay;
    //  접종 종류
    @Column(length = 100, nullable = false)
    private String vaccineType;
    //  접종 주사명
    @Column(nullable = false)
    private String vaccineName;
    //  접종 주기(일)
    @Column(nullable = false)
    private int period;
    //  총 기간(월)
    @Column(nullable = false)
    private int totalPeriod;
    
    // 동물 이름
    @Column(nullable = false)
    private String petName;

    @JsonIgnoreProperties({"posts", "pets", "vaccinations"})
    @JoinColumn(name = "userId")
    @ManyToOne
    private User user;

    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }
}
