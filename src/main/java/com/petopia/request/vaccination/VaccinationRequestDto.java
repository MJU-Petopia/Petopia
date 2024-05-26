package com.petopia.request.vaccination;


import com.petopia.domain.pet.Pet;
import com.petopia.domain.user.User;
import com.petopia.domain.vaccination.Vaccination;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class VaccinationRequestDto {
    //  1차 접종(예정 날짜)
    private String startDay;
    //  접종 종류
    private String vaccineType;
    //  접종 주사명
    private String vaccineName;
    //  접종 주기(일)
    private int period;
    //  총 기간(월)
    private int totalPeriod;
    // 동물 이름
    private Pet pet;

    public Vaccination toEntity(User user, Pet pet) {
        return Vaccination.builder()
                .startDay(startDay)
                .vaccineType(vaccineType)
                .vaccineName(vaccineName)
                .period(period)
                .totalPeriod(totalPeriod)
                .pet(pet)
                .user(user)
                .build();
    }
}
