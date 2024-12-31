import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState(null); // State for popup message
  const API_KEY = "686244ec4147388b80aec9c189d87604"; // Replace with your OpenWeatherMap API key

  const fetchForecast = async () => {
    if (!location.trim()) {
      setError("Please enter a location.");
      return;
    }

    setError(""); // Reset error state
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          location
        )}&units=metric&appid=${API_KEY}`
      );

      setForecastData(response.data);

      // Set popup message for the current weather
      const { city, list } = response.data;
      const currentWeather = list[0];
      setPopupMessage(
        `Weather Forecast for ${city.name}:
        Temperature: ${currentWeather.main.temp}°C
        Weather: ${currentWeather.weather[0].description}
        Humidity: ${currentWeather.main.humidity}%
        Wind Speed: ${currentWeather.wind.speed} m/s`
      );
    } catch (err) {
      console.error("Error fetching weather forecast:", err);
      setError("Unable to fetch weather data. Please check the location name.");
      setForecastData(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather Forecast App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={fetchForecast}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Get Forecast
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      <div style={{ marginTop: "50px" }}>
        <h3> Google Map</h3>
        {/* Replace this iframe source with a relevant map or air quality map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_URL"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
            borderRadius: "8px",
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Popup Notification */}
      {popupMessage && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid #DDD",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            textAlign: "center",
          }}
        >
          <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>{popupMessage}</pre>
          <button
            onClick={() => setPopupMessage(null)}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#FFF",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;