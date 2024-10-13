package com.dubhacks24.showandtell.model;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post {

    private Date timestamp;
    private String title;
    private String markdown;
    private String author;
    private List<Comment> comments;
    private int kudos;
    private List<String> gaveKudos;

}
