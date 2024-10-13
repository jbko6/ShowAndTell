package com.dubhacks24.showandtell.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dubhacks24.showandtell.model.Comment;
import com.dubhacks24.showandtell.model.Group;
import com.dubhacks24.showandtell.model.Post;
import com.dubhacks24.showandtell.repository.GroupRepository;
import com.dubhacks24.showandtell.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class GroupController {
    
    private final Logger log = LoggerFactory.getLogger(GroupController.class);
    private GroupRepository groupRepo;
    private UserRepository userRepo;

    public GroupController(GroupRepository groupRepo, UserRepository userRepo) {
        this.groupRepo = groupRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/groups")
    Iterable<Group> Groups(Principal principal) {
        return groupRepo.findAllByMember(new ObjectId(principal.getName()));
    }

    @GetMapping("/groups/{id}")
    ResponseEntity<?> getGroup(@PathVariable ObjectId id) {
        Optional<Group> group = groupRepo.findById(id);
        return group.map(response -> ResponseEntity.ok().body(response))
                    .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/groups/{id}/posts")
    ResponseEntity<?> submitPost(@PathVariable ObjectId id, @Valid @RequestBody Post post) throws URISyntaxException {
        Optional<Group> group = groupRepo.findById(id);
        if (group.isPresent()) {
            Group realGroup = group.get();
            realGroup.getPosts().add(post);
            Group result = groupRepo.save(realGroup);
            return ResponseEntity.created(new URI("/api/group/" + result.getId())).body(result);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/groups/{id}/posts/{index}/comments")
    ResponseEntity<?> submitComment(@PathVariable ObjectId id, @PathVariable int index, @Valid @RequestBody Comment comment) throws URISyntaxException {
        Optional<Group> group = groupRepo.findById(id);
        if (group.isPresent()) {
            Group realGroup = group.get();
            realGroup.getPosts().get(index).getComments().add(comment);
            Group result = groupRepo.save(realGroup);
            return ResponseEntity.created(new URI("/api/group/" + result.getId())).body(result);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/groups")
    ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException {
        log.info("Request to create Group: {}", group);
        Group result = groupRepo.save(group);
        
        return ResponseEntity.created(new URI("/api/group/" + result.getId())).body(result);
    }

    @PutMapping("/groups/{id}")
    ResponseEntity<Group> updateGroup(@Valid @RequestBody Group Group) throws URISyntaxException {
        log.info("Request to update Group: {}", Group);
        Group result = groupRepo.save(Group);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/groups/{id}")
    ResponseEntity<?> deleteGroup(@PathVariable ObjectId id) {
        log.info("Request to delete Group: {}", id);
        groupRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
