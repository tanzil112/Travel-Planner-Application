import React, { useState } from "react";

const ItineraryForm = ({ onAddItinerary }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItinerary(name);
    setName(""); // Clear input after adding
  };

  return (
    <form   className="itinerary" onSubmit={handleSubmit}>
      <input
     
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter itinerary"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItineraryForm;
