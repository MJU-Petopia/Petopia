package com.petopia.domain.pet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.petopia.domain.comment.Comment;
import com.petopia.domain.user.User;
import com.petopia.domain.vaccination.Vaccination;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // 고양이 / 강아지
    @Column(nullable = false)
    private String petType;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String gender;

    // 중성화 여부 (1 = true, 0 = false)
    @Column(nullable = false)
    private Integer neutering;

    // 품종
    @Column(nullable = false)
    private String kind;

    // 생일
    @Column(nullable = false)
    private String birthday;

    // 접종 목록
    @Column(nullable = false)
    private String vaccinationList;

    @JsonIgnoreProperties({"pets", "posts", "vaccinations"})
    @JoinColumn(name = "userId")
    @ManyToOne
    private User user;

    @JsonIgnoreProperties({"pet"})
    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<Vaccination> vaccinations;

    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }

    public void update(String petType, String name, String gender, Integer neutering, String kind, String birthday, String vaccinationList) {
        this.petType = petType;
        this.name = name;
        this.gender = gender;
        this.neutering = neutering;
        this.kind = kind;
        this.birthday = birthday;
        this.vaccinationList = vaccinationList;
    }

}
