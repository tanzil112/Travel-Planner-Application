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
      const response = await axios.get("/api/auth/flights", {
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
      const response = await axios.post("/api/auth/booking", {
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
        <h2>Search Flights</h2>
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

      <style jsx>{`
        .flights-section {
          width: 100%;
          min-height: 100vh;
          background-color: #f3f3f3;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .flight-search-container {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
          box-sizing: border-box;
          margin-top: 20px;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 15px;
          text-align: center;
        }

        .search-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .search-form input {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 100%;
        }

        .search-form button {
          padding: 10px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .search-form button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Flights;
