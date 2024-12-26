import React, { useState, useEffect } from "react";
import ItineraryForm from "./ItineraryForm";
import ItineraryList from "./ItineraryList";

function Itinerary() {
  const [itineraries, setItineraries] = useState(() => {
    // Load from local storage on initial render
    const saved = localStorage.getItem("itineraries");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to local storage whenever itineraries change
  useEffect(() => {
    localStorage.setItem("itineraries", JSON.stringify(itineraries));
  }, [itineraries]);

  const addItinerary = (name) => {
    setItineraries((prev) => [...prev, { name, sharedWith: [] }]);
  };

  const updateItinerary = (index, newName) => {
    setItineraries((prev) =>
      prev.map((itinerary, i) =>
        i === index ? { ...itinerary, name: newName } : itinerary
      )
    );
  };

  const deleteItinerary = (index) => {
    setItineraries((prev) => prev.filter((_, i) => i !== index));
  };

  const duplicateItinerary = (index) => {
    setItineraries((prev) => [
      ...prev,
      { ...prev[index], name: `${prev[index].name} (Copy)` },
    ]);
  };

  const shareItinerary = (index, email) => {
    setItineraries((prev) =>
      prev.map((itinerary, i) =>
        i === index
          ? { ...itinerary, sharedWith: [...itinerary.sharedWith, email] }
          : itinerary
      )
    );
  };

  return (
    <div className="itinerary">
      <ItineraryForm onAddItinerary={addItinerary} />
      <ItineraryList
        itineraries={itineraries}
        onUpdate={updateItinerary}
        onDelete={deleteItinerary}
        onDuplicate={duplicateItinerary}
        onShare={shareItinerary}
      />
    </div>
  );
}

export default Itinerary;
