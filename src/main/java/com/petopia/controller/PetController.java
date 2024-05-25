package com.petopia.controller;

import com.petopia.domain.pet.Pet;
import com.petopia.request.pet.PetRequestDto;
import com.petopia.response.CMRespDto;
import com.petopia.service.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PetController {

    private final PetService petService;

//    // 반려동물 등록
//    @PostMapping("/api/pet")
//    public ResponseEntity<?> petCreate(@RequestBody PetRequestDto petRequestDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        Pet pet = petService.petCreate(petRequestDto, principalDetails);
//        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 등록 완료", pet), HttpStatus.CREATED);
//    }

    // 반려동물 등록
    @PostMapping("/api/pet/userId={userId}")
    public ResponseEntity<?> petCreate(@RequestBody PetRequestDto petRequestDto, @PathVariable int userId) {
//        if(principalDetails == null) {
//            System.out.println("널입니다.");
//            return new ResponseEntity<>(new CMRespDto<>(-1, "반려동물 등록 실패", null), HttpStatus.CREATED);
//        }
        
        Pet pet = petService.petCreate(petRequestDto, userId);
        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 등록 완료", pet), HttpStatus.CREATED);
    }

//    // 모든 반려동물 조회
//    @GetMapping("/api/pet")
//    public ResponseEntity<?> petsRead(@PageableDefault(size = 3) Pageable pageable, @AuthenticationPrincipal PrincipalDetails principalDetails){
//        Page<Pet> pets = petService.petsRead(pageable, principalDetails.getUser().getId());
//        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", pets), HttpStatus.OK);
//    }

    // 모든 반려동물 조회
    @GetMapping("/api/pet/all/userId={userId}")
    public ResponseEntity<?> petsRead(@PageableDefault Pageable pageable, @PathVariable int userId){
        Page<Pet> pets = petService.petsRead(pageable, userId);
        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", pets), HttpStatus.OK);
    }

    // 반려동물 단건 조회
    @GetMapping("/api/pet/{petId}")
    public ResponseEntity<?> postRead(@PathVariable int petId){
        Pet pet = petService.petRead(petId);
        return new ResponseEntity<>(new CMRespDto<>(1, "조회 성공", pet), HttpStatus.OK);
    }

    // 반려동물 수정
    @PatchMapping("/api/pet/{petId}")
    public ResponseEntity<?> petUpdate(@PathVariable int petId, @RequestBody PetRequestDto petRequestDto) {
        Pet pet = petService.petUpdate(petId, petRequestDto);
        return new ResponseEntity<>(new CMRespDto<>(1, "수정 성공", pet), HttpStatus.OK);
    }

//    // 반려동물 삭제
//    @DeleteMapping("/api/pet/{petId}")
//    public ResponseEntity<?> petDelete(@PathVariable int petId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        petService.petDelete(petId, principalDetails.getUser().getId());
//        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 삭제 성공", null),HttpStatus.OK);
//    }

    // 반려동물 삭제
    @DeleteMapping("/api/pet/petId={petId}/userId={userId}")
    public ResponseEntity<?> petDelete(@PathVariable int petId, @PathVariable int userId) {
        petService.petDelete(petId, userId);
        return new ResponseEntity<>(new CMRespDto<>(1, "반려동물 삭제 성공", null),HttpStatus.OK);
    }
}
