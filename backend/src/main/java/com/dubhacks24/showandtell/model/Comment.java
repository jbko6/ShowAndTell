package com.dubhacks24.showandtell.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment {
    
    @Id
    @Setter(AccessLevel.NONE)
    private ObjectId id;

    private String content;
    private ObjectId author;

}
