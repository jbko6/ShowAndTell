package com.dubhacks24.showandtell.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document("posts")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post {
    
    @Id
    @Setter(AccessLevel.NONE)
    private ObjectId id;

    private String markdown;
    private ObjectId author;
    private List<ObjectId> comments;

}
