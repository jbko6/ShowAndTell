package com.dubhacks24.showandtell.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dubhacks24.showandtell.model.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByName(String name);

}
