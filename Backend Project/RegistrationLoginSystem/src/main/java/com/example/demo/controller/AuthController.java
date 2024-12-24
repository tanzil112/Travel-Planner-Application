package com.example.demo.controller;

import com.example.demo.model.Flights;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    // Endpoint for user registration
    @PostMapping("/register")
    public String registerUser(@RequestBody User user, @RequestParam String confirmPassword) {
        return userService.register(user, confirmPassword);
    }

    // Endpoint for user login
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty() ||
            user.getPassword() == null || user.getPassword().isEmpty()) {
            return "Username and password cannot be empty";
        }

        Optional<User> existingUser = userService.login(user.getUsername(), user.getPassword());
        return existingUser.isPresent() ? "Login successful!" : "Invalid username or password";
    }

    // Endpoint for flight search
    @GetMapping("/flights")
    public List<Flights> searchFlights(
            @RequestParam String departureCity,
            @RequestParam String arrivalCity,
            @RequestParam String travelDate) {
        return userService.searchFlights(departureCity, arrivalCity, travelDate);
    }

    // Endpoint to get all flights
    @GetMapping("/all-flights")
    public List<Flights> getAllFlights() {
        return userService.getAllFlights();
    }
    
    @PostMapping("/booking")
    public String bookFlight(@RequestParam Long flightId, @RequestParam int passengers) {
        try {
            return userService.bookFlight(flightId, passengers);
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
