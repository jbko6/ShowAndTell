package com.dubhacks24.showandtell.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dubhacks24.showandtell.model.Category;
import com.dubhacks24.showandtell.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private CategoryRepository categoryRepo;

    public CategoryController(CategoryRepository categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @GetMapping("/categories")
    public List<Category> categories() {
        return categoryRepo.findAll();
    }
    
}
