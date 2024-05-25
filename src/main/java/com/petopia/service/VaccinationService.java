package com.petopia.service;

import com.petopia.domain.user.User;
import com.petopia.domain.user.UserRepository;
import com.petopia.domain.vaccination.Vaccination;
import com.petopia.domain.vaccination.VaccinationRepository;
import com.petopia.handler.ex.CustomApiException;
import com.petopia.request.vaccination.VaccinationRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class VaccinationService {

    private final VaccinationRepository vaccinationRepository;
    private final UserRepository userRepository;

//    // 예방접종 등록
//    @Transactional
//    public Vaccination vaccinationCreate(VaccinationRequestDto vaccinationRequestDto, PrincipalDetails principalDetails) {
//        Vaccination vaccination = vaccinationRequestDto.toEntity(principalDetails.getUser());
//        vaccinationRepository.save(vaccination);
//        return vaccination;
//    }

    // 예방접종 등록
    @Transactional
    public Vaccination vaccinationCreate(VaccinationRequestDto vaccinationRequestDto, int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new CustomApiException("회원을 찾지 못했습니다."));
        Vaccination vaccination = vaccinationRequestDto.toEntity(user);
        vaccinationRepository.save(vaccination);
        return vaccination;
    }

    // 모든 예방접종 조회
    @Transactional(readOnly = true)
    public Page<Vaccination> vaccinationsRead(Pageable pageable, int userId){
        Page<Vaccination> vaccinations = vaccinationRepository.mList(pageable, userId);
        return vaccinations;
    }
//
//    // 반려동물 단건 조회
//    @Transactional(readOnly = true)
//    public Pet petRead(int postId){
//        Pet pet = petRepository.findById(postId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
//        return pet;
//    }
//
//    // 반려동물 수정
//    @Transactional
//    public Pet petUpdate(int petId, PetRequestDto petRequestDto) {
//        Pet pet = petRepository.findById(petId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
//        pet.update(petRequestDto.getPetType() != null ? petRequestDto.getPetType() : pet.getPetType(),
//                petRequestDto.getName() != null ? petRequestDto.getName() : pet.getName(),
//                petRequestDto.getGender() != null ? petRequestDto.getGender() : pet.getGender(),
//                petRequestDto.getNeutering() != null ? petRequestDto.getNeutering() : pet.getNeutering(),
//                petRequestDto.getKind() != null ? petRequestDto.getKind() : pet.getKind(),
//                petRequestDto.getBirthday() != null ? petRequestDto.getBirthday() : pet.getBirthday(),
//                petRequestDto.getVaccinationList() != null ? petRequestDto.getVaccinationList() : pet.getVaccinationList()
//                );
//        return pet;
//    }
//
//    // 반려동물 삭제
//    @Transactional
//    public void petDelete(int petId, int userId) {
//        Pet pet = petRepository.findById(petId).orElseThrow(() -> new CustomApiException("반려동물을 찾지 못했습니다."));
//        petRepository.mDelete(pet.getId(), userId);
//    }


}
