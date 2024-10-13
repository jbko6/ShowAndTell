package com.dubhacks24.showandtell.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document("users")
@Data
@NoArgsConstructor
public class User {
    
    @Id
    @Setter(AccessLevel.NONE)
    private String sub;

    private String name;
    private String email;
    private String picture;
    private String nickname;
    private List<Group> groups;

    public User(String sub, String name, String email, String picture, String nickname) {
        this.sub = sub;
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.nickname = nickname;
    }

}
