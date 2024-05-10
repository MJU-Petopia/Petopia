package com.petopia.request.pet;

import com.petopia.domain.pet.Pet;
import com.petopia.domain.user.User;
import lombok.Data;

@Data
public class PetRequestDto {
    private String petType;
    private String name;
    private String gender;
    private Integer neutering;
    private String kind;
    private String birthday;
    private String vaccinationList;

    public Pet toEntity(User user) {
        return Pet.builder()
                .petType(petType)
                .name(name)
                .gender(gender)
                .neutering(neutering)
                .kind(kind)
                .birthday(birthday)
                .vaccinationList(vaccinationList)
                .user(user)
                .build();

    }
}
