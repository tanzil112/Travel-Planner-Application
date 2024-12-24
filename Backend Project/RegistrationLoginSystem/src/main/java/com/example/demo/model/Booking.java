package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long flightId;
    private String confirmationId;
    private int passengers;
	public Booking(Long id, Long flightId, String confirmationId, int passengers) {
		super();
		this.id = id;
		this.flightId = flightId;
		this.confirmationId = confirmationId;
		this.passengers = passengers;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getFlightId() {
		return flightId;
	}
	public void setFlightId(Long flightId) {
		this.flightId = flightId;
	}
	public String getConfirmationId() {
		return confirmationId;
	}
	public void setConfirmationId(String confirmationId) {
		this.confirmationId = confirmationId;
	}
	public int getPassengers() {
		return passengers;
	}
	public void setPassengers(int passengers) {
		this.passengers = passengers;
	}
	@Override
	public String toString() {
		return "Booking [id=" + id + ", flightId=" + flightId + ", confirmationId=" + confirmationId + ", passengers="
				+ passengers + "]";
	}

    // Getters and Setters
    
}
