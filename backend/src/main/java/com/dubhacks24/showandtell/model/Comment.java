package com.dubhacks24.showandtell.model;

import java.util.List;

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
    private String id;

    private String content;
    private String author;
    private int kudos;
    private List<String> gaveKudos;

}
