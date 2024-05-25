package com.petopia.service;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.pet.Pet;
import com.petopia.domain.pet.PetRepository;
import com.petopia.handler.ex.CustomApiException;
import com.petopia.request.pet.PetRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class PetService {

    private final PetRepository petRepository;

    // 반려동물 등록
    @Transactional
    public Pet petCreate(PetRequestDto petRequestDto, PrincipalDetails principalDetails) {
        Pet pet = petRequestDto.toEntity(principalDetails.getUser());
        petRepository.save(pet);
        return pet;
    }

    // 모든 반려동물 조회
    @Transactional(readOnly = true)
    public Page<Pet> petsRead(Pageable pageable, int userId){
        Page<Pet> pets = petRepository.mList(pageable, userId);
        return pets;
    }

    // 반려동물 단건 조회
    @Transactional(readOnly = true)
    public Pet petRead(int postId){
        Pet pet = petRepository.findById(postId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
        return pet;
    }

    // 반려동물 수정
    @Transactional
    public Pet petUpdate(int petId, PetRequestDto petRequestDto) {
        Pet pet = petRepository.findById(petId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
        pet.update(petRequestDto.getPetType() != null ? petRequestDto.getPetType() : pet.getPetType(),
                petRequestDto.getName() != null ? petRequestDto.getName() : pet.getName(),
                petRequestDto.getGender() != null ? petRequestDto.getGender() : pet.getGender(),
                petRequestDto.getNeutering() != null ? petRequestDto.getNeutering() : pet.getNeutering(),
                petRequestDto.getKind() != null ? petRequestDto.getKind() : pet.getKind(),
                petRequestDto.getBirthday() != null ? petRequestDto.getBirthday() : pet.getBirthday(),
                petRequestDto.getVaccinationList() != null ? petRequestDto.getVaccinationList() : pet.getVaccinationList()
                );
        return pet;
    }

    // 반려동물 삭제
    @Transactional
    public void petDelete(int petId, int userId) {
        Pet pet = petRepository.findById(petId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
        petRepository.mDelete(pet.getId(), userId);
    }


}
