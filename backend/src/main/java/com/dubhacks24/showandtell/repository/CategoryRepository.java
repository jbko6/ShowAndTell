package com.dubhacks24.showandtell.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.dubhacks24.showandtell.model.Category;

public interface CategoryRepository extends MongoRepository<Category, ObjectId> {
    
    public Optional<Category> findCategoryById(String id);

}
