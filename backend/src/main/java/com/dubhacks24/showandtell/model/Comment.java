package com.dubhacks24.showandtell.model;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment {

    private Date timestamp;
    private String content;
    private String author;
    private int kudos;
    private List<String> gaveKudos;

}
