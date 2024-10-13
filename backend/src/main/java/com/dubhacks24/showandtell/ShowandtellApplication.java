package com.dubhacks24.showandtell;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dubhacks24.showandtell.controllers.CategoryController;
import com.dubhacks24.showandtell.controllers.GroupController;
import com.dubhacks24.showandtell.controllers.UserController;

@RestController
@SpringBootApplication
@EnableMongoRepositories
public class ShowAndTellApplication {

	@Autowired
	UserController userController;
	@Autowired
	GroupController groupController;
	@Autowired
	CategoryController categoryController;

	@RequestMapping("/")
	String home() {
		return "Hello!";
	}

	public static void main(String[] args) {
		SpringApplication.run(ShowAndTellApplication.class, args);
	}

	

}
