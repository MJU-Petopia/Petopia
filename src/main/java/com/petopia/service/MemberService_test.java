package com.petopia.service;

import com.petopia.model.Member_test;
import com.petopia.repository.MemberRepository_test;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService_test {

    private final MemberRepository_test memberRepositoryTest;

    @Transactional
    public Member_test signup(Member_test memberTest) {
        Member_test memberTestEntity = memberRepositoryTest.save(memberTest);
        return memberTestEntity;
    }

}
