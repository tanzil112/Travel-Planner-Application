import React, { useState } from "react";
import axios from "axios";

const Flights = () => {
  const [flightSearch, setFlightSearch] = useState({
    departureCity: "",
    arrivalCity: "",
    travelDate: "",
    passengers: 1,
  });
  const [flightResults, setFlightResults] = useState([]);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Function to handle flight search
  const handleSearchFlights = async () => {
    try {
      const response = await axios.get("/api/flights", {
        params: { ...flightSearch },
      });
      setFlightResults(response.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  // Function to handle flight booking
  const handleBooking = async (flight) => {
    try {
      const response = await axios.post("/api/booking", {
        flightId: flight.id,
      });
      setBookingConfirmation(response.data.confirmationId);
      alert(`Booking confirmed! Confirmation ID: ${response.data.confirmationId}`);
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

  return (
    <div className="flights-section">
      <div className="flight-search-container">
        <h2 style={{textAlign:"center"}}>Search Flights</h2>
        <div className="search-form">
          <input
            type="text"
            placeholder="Departure City"
            value={flightSearch.departureCity}
            onChange={(e) =>
              setFlightSearch({ ...flightSearch, departureCity: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Arrival City"
            value={flightSearch.arrivalCity}
            onChange={(e) =>
              setFlightSearch({ ...flightSearch, arrivalCity: e.target.value })
            }
          />
          <input
            type="date"
            value={flightSearch.travelDate}
            onChange={(e) =>
              setFlightSearch({ ...flightSearch, travelDate: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Number of Passengers"
            min="1"
            value={flightSearch.passengers}
            onChange={(e) =>
              setFlightSearch({ ...flightSearch, passengers: e.target.value })
            }
          />
          <button onClick={handleSearchFlights}>Search Flights</button>
        </div>
      </div>

     
    </div>
  );
};

export default Flights;