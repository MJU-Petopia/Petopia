package com.petopia.request.user;

import com.petopia.domain.user.User;
import lombok.Data;


@Data
public class UserUpdateDto {

    private String name;
    private String password;
    private String phone;
    private String gender;

    public User toEntity(){
        return User.builder()
                .name(name).password(password).phone(phone).gender(gender).build();
    }
}
