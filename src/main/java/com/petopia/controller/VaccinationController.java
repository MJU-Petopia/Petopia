package com.petopia.controller;

import com.petopia.config.auth.PrincipalDetails;
import com.petopia.domain.vaccination.Vaccination;
import com.petopia.request.vaccination.VaccinationRequestDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.VaccinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class VaccinationController {

    private final VaccinationService vaccinationService;

    // 예방접종 등록
    @PostMapping("/api/vaccination")
    public ResponseEntity<?> petCreate(@RequestBody VaccinationRequestDto vaccinationRequestDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Vaccination vaccination = vaccinationService.vaccinationCreate(vaccinationRequestDto, principalDetails);
        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 등록 완료", vaccination), HttpStatus.CREATED);
    }

    // 모든 예방접종 조회
    @GetMapping("/api/vaccination")
    public ResponseEntity<?> petsRead(@PageableDefault(size = 3) Pageable pageable, @AuthenticationPrincipal PrincipalDetails principalDetails){
        Page<Vaccination> vaccinations = vaccinationService.vaccinationsRead(pageable, principalDetails.getUser().getId());
        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", vaccinations), HttpStatus.OK);
    }
//
//    // 반려동물 단건 조회
//    @GetMapping("/api/pet/{petId}")
//    public ResponseEntity<?> postRead(@PathVariable int petId){
//        Pet pet = petService.petRead(petId);
//        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", pet), HttpStatus.OK);
//    }
//
//    // 반려동물 수정
//    @PatchMapping("/api/pet/{petId}")
//    public ResponseEntity<?> petUpdate(@PathVariable int petId, @RequestBody PetRequestDto petRequestDto) {
//        Pet pet = petService.petUpdate(petId, petRequestDto);
//        return new ResponseEntity<>(new CMRespDto<>(1, "수정 성공", pet), HttpStatus.OK);
//    }
//
//    // 반려동물 삭제
//    @DeleteMapping("/api/pet/{petId}")
//    public ResponseEntity<?> petDelete(@PathVariable int petId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        petService.petDelete(petId, principalDetails.getUser().getId());
//        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 삭제 성공", null),HttpStatus.OK);
//    }
}
