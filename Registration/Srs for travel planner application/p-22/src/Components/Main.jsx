import React, { useState } from "react";
import ItineraryForm from "./ItineraryForm";
import ItineraryList from "./ItineraryList";

const Main = () => {
  const [itineraries, setItineraries] = useState([]);

  const addItinerary = (name) => {
    if (name.trim()) {
      setItineraries([...itineraries, { name, sharedWith: [] }]); // Store itinerary with an empty sharedWith array
    }
  };

  const updateItinerary = (index, newName) => {
    const updatedItineraries = [...itineraries];
    updatedItineraries[index].name = newName; // Update the name of the itinerary
    setItineraries(updatedItineraries);
  };

  const deleteItinerary = (index) => {
    setItineraries(itineraries.filter((_, i) => i !== index)); // Remove itinerary from the list
  };

  const duplicateItinerary = (index) => {
    setItineraries([...itineraries, itineraries[index]]); // Duplicate the selected itinerary
  };

  const shareItinerary = (index, email) => {
    const updatedItineraries = [...itineraries];
    updatedItineraries[index].sharedWith.push(email); // Add collaborator email to the sharedWith array
    setItineraries(updatedItineraries);
  };

  return (
    <div>
      <ItineraryForm onAddItinerary={addItinerary} />
      <ItineraryList
        itineraries={itineraries}
        onUpdate={updateItinerary}
        onDelete={deleteItinerary}
        onDuplicate={duplicateItinerary}
        onShare={shareItinerary} // Passing share functionality
      />
    </div>
  );
};

export default Main;
