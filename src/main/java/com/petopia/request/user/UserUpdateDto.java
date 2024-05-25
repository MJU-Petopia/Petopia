package com.petopia.request.user;

import com.petopia.domain.user.User;
import lombok.Data;


@Data
public class UserUpdateDto {

    private String username;
    private String phone;
    private String gender;

    public User toEntity(){
        return User.builder()
                .name(username).phone(phone).gender(gender).build();
    }
}
