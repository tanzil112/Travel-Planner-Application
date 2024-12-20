package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Regular Expression for password validation
    private static final String PASSWORD_PATTERN = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$";

    public String register(User user, String confirmPassword) {
        // Validate password
        if (!Pattern.matches(PASSWORD_PATTERN, user.getPassword())) {
            return "Password must be alphanumeric and include at least one special character.";
        }

        // Validate confirmPassword
        if (!user.getPassword().equals(confirmPassword)) {
            return "Passwords do not match.";
        }

        // Check if email is already registered
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "Email is already registered.";
        }

        userRepository.save(user);
        return "User registered successfully!";
    }

    public Optional<User> login(String email, String password) {
        return userRepository.findByUsername(email)
                .filter(user -> user.getPassword().equals(password));
    }
}
