package com.dubhacks24.showandtell.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dubhacks24.showandtell.model.Category;

public interface CategoryRepository extends MongoRepository<Category, String> {
    
    public Optional<Category> findCategoryById(String id);

}
