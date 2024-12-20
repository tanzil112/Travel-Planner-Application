package com.example.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disable CSRF for testing with Postman
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/register", "/api/auth/login").permitAll() // Allow unauthenticated access to these endpoints
                .anyRequest().authenticated() // All other endpoints require authentication
            .and()
            .httpBasic(); // Enable basic authentication for testing

        return http.build();
    }
}
