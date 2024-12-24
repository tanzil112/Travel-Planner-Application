package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Flights {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String departureCity;
    private String arrivalCity;
    private String travelDate;
    private double price;
    private int seatsAvailable;
	public Flights() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Flights(Long id, String departureCity, String arrivalCity, String travelDate, double price,
			int seatsAvailable) {
		super();
		this.id = id;
		this.departureCity = departureCity;
		this.arrivalCity = arrivalCity;
		this.travelDate = travelDate;
		this.price = price;
		this.seatsAvailable = seatsAvailable;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDepartureCity() {
		return departureCity;
	}
	public void setDepartureCity(String departureCity) {
		this.departureCity = departureCity;
	}
	public String getArrivalCity() {
		return arrivalCity;
	}
	public void setArrivalCity(String arrivalCity) {
		this.arrivalCity = arrivalCity;
	}
	public String getTravelDate() {
		return travelDate;
	}
	public void setTravelDate(String travelDate) {
		this.travelDate = travelDate;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getSeatsAvailable() {
		return seatsAvailable;
	}
	public void setSeatsAvailable(int seatsAvailable) {
		this.seatsAvailable = seatsAvailable;
	}
	@Override
	public String toString() {
		return "Flights [id=" + id + ", departureCity=" + departureCity + ", arrivalCity=" + arrivalCity
				+ ", travelDate=" + travelDate + ", price=" + price + ", seatsAvailable=" + seatsAvailable + "]";
	}
    

}
