package com.dubhacks24.showandtell.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.lang.NonNull;

import com.dubhacks24.showandtell.model.Category;
import com.dubhacks24.showandtell.model.Group;

public interface GroupRepository extends MongoRepository<Group, String> {
    
    List<Group> findAllByMemberId(String id);

    Optional<Group> findByCategory(Category category);

    @NonNull Optional<Group> findById(@NonNull String id);
    
}
