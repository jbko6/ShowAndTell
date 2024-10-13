package com.dubhacks24.showandtell.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Document("groups")
@Data
public class Group {
    
    @Id
    @Setter(AccessLevel.NONE)
    private String id;

    private String categoryName;
    private List<String> member;
    private List<Post> posts;
    private Map<String, Date> postDays;

}
