import React from "react";
import ItineraryItem from "./ItineraryItem";

const ItineraryList = ({ itineraries, onUpdate, onDelete, onDuplicate, onShare }) => {
  return (
    <ul>
      {itineraries.map((itinerary, index) => (
        <ItineraryItem
          key={index}
          itinerary={itinerary}
          index={index}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onShare={onShare} // Passing share functionality to each item
        />
      ))}
    </ul>
  );
};

export default ItineraryList;
