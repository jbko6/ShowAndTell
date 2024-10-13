package com.dubhacks24.showandtell.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000", "http://10.18.244.97:3000", "http://localhost:8080")
            .allowedMethods("*")
            .allowedHeaders("*")
            .exposedHeaders("*")
            .allowCredentials(true).maxAge(3600);
        registry.addMapping("/oauth2/authorization/okta")
            .allowedOrigins("http://localhost:3000", "http://10.18.244.97:3000", "http://localhost:8080")
            .allowedMethods("*")
            .allowedHeaders("*")
            .exposedHeaders("*")
            .allowCredentials(true).maxAge(3600);
        registry.addMapping("https://dev-lnmlyqkb2q6i4hgy.us.auth0.com/**")
            .allowedOrigins("http://localhost:3000", "http://10.18.244.97:3000", "http://localhost:8080")
            .allowedMethods("*")
            .allowedHeaders("*")
            .exposedHeaders("*")
            .allowCredentials(true).maxAge(3600);
    }

}
