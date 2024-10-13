package com.dubhacks24.showandtell.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document("users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @Setter(AccessLevel.NONE)
    private String id;

    private String name;
    private String email;

}
