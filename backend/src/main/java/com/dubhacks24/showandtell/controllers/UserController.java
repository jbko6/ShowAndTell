package com.dubhacks24.showandtell.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dubhacks24.showandtell.repository.UserRepository;
import com.dubhacks24.showandtell.model.User;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class UserController {

    @Value("${okta.oauth2.issuer}")
    private String issuer;
    
    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private final ClientRegistration registration;
    private final UserRepository userRepo;

    public UserController(ClientRegistrationRepository repository, UserRepository userRepo) {
        this.registration = repository.findByRegistrationId("okta");
        this.userRepo = userRepo;
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User user) {
        if (user == null) {
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            if (userRepo.findById(user.getName()).isEmpty()) {
                Map<String, Object> attributes = user.getAttributes();
                User newUser = new User(user.getName(), (String) attributes.get("name"), (String) attributes.get("email"));
                userRepo.save(newUser);
            }
            return ResponseEntity.ok().body(user.getAttributes());
        }
    }

    @GetMapping("/logout")
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        // send logout URL to client so they can initiate logout
        StringBuilder logoutUrl = new StringBuilder();
        String issuerUri = this.registration.getProviderDetails().getIssuerUri();
        logoutUrl.append(issuerUri.endsWith("/") ? issuerUri + "v2/logout" : issuerUri + "/v2/logout");
        logoutUrl.append("?client_id=").append(this.registration.getClientId());

        Map<String, String> logoutDetails = new HashMap<>();
        logoutDetails.put("logoutUrl", logoutUrl.toString());
        request.getSession(false).invalidate();
        return ResponseEntity.ok().body(logoutDetails);
    }

}
