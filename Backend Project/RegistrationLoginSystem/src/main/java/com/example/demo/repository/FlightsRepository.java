package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Flights;

@Repository
public interface FlightsRepository extends JpaRepository<Flights, Long> {
	 List<Flights> findByDepartureCityAndArrivalCityAndTravelDate(String departureCity, String arrivalCity, String travelDate);

}
