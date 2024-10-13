package com.dubhacks24.showandtell.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.lang.NonNull;

import com.dubhacks24.showandtell.model.Category;
import com.dubhacks24.showandtell.model.Group;

public interface GroupRepository extends MongoRepository<Group, ObjectId> {
    
    List<Group> findAllByMember(ObjectId id);

    Optional<Group> findByCategory(Category category);

    @NonNull Optional<Group> findById(@NonNull ObjectId id);
    
}
