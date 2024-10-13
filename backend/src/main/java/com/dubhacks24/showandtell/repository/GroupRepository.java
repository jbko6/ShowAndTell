package com.dubhacks24.showandtell.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.lang.NonNull;

import com.dubhacks24.showandtell.model.Group;

public interface GroupRepository extends MongoRepository<Group, ObjectId> {
    
    List<Group> findAllByMember(String id);

    Optional<Group> findByCategoryName(String category);

    @NonNull Optional<Group> findById(@NonNull String id);

    void deleteById(String id);
    
}
