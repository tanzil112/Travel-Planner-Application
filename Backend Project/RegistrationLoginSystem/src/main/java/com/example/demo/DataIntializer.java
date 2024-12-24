package com.example.demo;

import com.example.demo.model.Flights;
import com.example.demo.repository.FlightsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataIntializer implements CommandLineRunner {

    @Autowired
    private FlightsRepository flightsRepository;

    @Override
    public void run(String... args) throws Exception {
        // Add sample flight data
        flightsRepository.save(new Flights(null, "New York", "Los Angeles", "2024-12-25", 350.00, 20));
        flightsRepository.save(new Flights(null, "New York", "Los Angeles", "2024-12-25", 400.00, 15));
        flightsRepository.save(new Flights(null, "Chicago", "Miami", "2024-12-25", 200.00, 10));
        flightsRepository.save(new Flights(null, "San Francisco", "Seattle", "2024-12-25", 150.00, 5));
        
        flightsRepository.save(new Flights(null, "Boston", "Dallas", "2024-12-26", 300.00, 25));
        flightsRepository.save(new Flights(null, "Houston", "Atlanta", "2024-12-26", 180.00, 30));
        flightsRepository.save(new Flights(null, "Las Vegas", "Denver", "2024-12-27", 220.00, 12));
        flightsRepository.save(new Flights(null, "Orlando", "Phoenix", "2024-12-28", 270.00, 18));
        flightsRepository.save(new Flights(null, "Washington", "San Diego", "2024-12-29", 400.00, 20));
        flightsRepository.save(new Flights(null, "Detroit", "Austin", "2024-12-30", 250.00, 10));
        flightsRepository.save(new Flights(null, "Philadelphia", "Nashville", "2024-12-31", 230.00, 15));
        flightsRepository.save(new Flights(null, "Seattle", "Las Vegas", "2025-01-01", 170.00, 20));
        flightsRepository.save(new Flights(null, "San Jose", "Portland", "2025-01-02", 150.00, 8));
        flightsRepository.save(new Flights(null, "Denver", "Chicago", "2025-01-03", 190.00, 14));
    }
}
