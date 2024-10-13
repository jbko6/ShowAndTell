package com.dubhacks24.showandtell.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Document("categories")
@Data
public class Category {
    
    @Id
    @Setter(AccessLevel.NONE)
    private ObjectId id;

    private String title;
    private String description;
    private List<Group> groups;

}
