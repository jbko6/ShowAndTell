package com.dubhacks24.showandtell.config;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.connection.ConnectionPoolSettings;

@Configuration
public class AppConfig {

    @Value("${spring.application.name}")
    private String applicationName;
    @Value("${spring.data.mongodb.uri}")
    private String connectionURI;
    
    public @Bean MongoClient mongoClient() {
        MongoClientSettings clientSettings = MongoClientSettings.builder()
                .retryWrites(true)
                .applyConnectionString(new ConnectionString(connectionURI))
                .applyToConnectionPoolSettings((ConnectionPoolSettings.Builder builder) -> {
                    builder.maxSize(100) //connections count
                            .minSize(5)
                            .maxConnectionLifeTime(30, TimeUnit.MINUTES)
                            .maxConnectionIdleTime( 1000, TimeUnit.MILLISECONDS);
                })
                .applyToSocketSettings(builder -> {
                    builder.connectTimeout(2000, TimeUnit.MILLISECONDS);
                })
                .applicationName(applicationName)
                .build();

        return MongoClients.create(clientSettings);
    }

}
