package com.example.demo.service;

import com.example.demo.model.Booking;
import com.example.demo.model.Flights;
import com.example.demo.model.User;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.FlightsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private FlightsRepository flightsRepository;
    
    @Autowired
    private BookingRepository bookingRepository;

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
    
    public List<Flights> searchFlights(String departureCity, String arrivalCity, String travelDate) {
        return flightsRepository.findByDepartureCityAndArrivalCityAndTravelDate(departureCity, arrivalCity, travelDate);
    }
    public List<Flights> getAllFlights() {
        return flightsRepository.findAll();
    }
    
    public String bookFlight(Long flightId, int passengers) throws Exception {
        Flights flight = flightsRepository.findById(flightId).orElseThrow(() -> new Exception("Flight not found"));

        if (flight.getSeatsAvailable() < passengers) {
            throw new Exception("Insufficient seats available");
        }

        flight.setSeatsAvailable(flight.getSeatsAvailable() - passengers);
        flightsRepository.save(flight);

        Booking booking = new Booking();
        booking.setFlightId(flightId);
        booking.setPassengers(passengers);
        booking.setConfirmationId(UUID.randomUUID().toString());
        bookingRepository.save(booking);

        return booking.getConfirmationId();
    }
}
