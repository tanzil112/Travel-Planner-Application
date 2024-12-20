import React from "react";

const ItineraryItem = ({ itinerary, index, onUpdate, onDelete, onDuplicate, onShare }) => {
  const handleEdit = () => {
    const newName = prompt("Edit itinerary:", itinerary.name);
    if (newName) {
      onUpdate(index, newName);
    }
  };

  const handleShare = () => {
    const email = prompt("Enter email to share itinerary:");
    if (email) {
      onShare(index, email);
    }
  };

  return (
    <li className="item">
      {itinerary.name}
      <div id="buttons">
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
      <button onClick={() => onDuplicate(index)}>Duplicate</button>
      <button onClick={handleShare}>Share</button>
      </div>
      
      <div>
        {itinerary.sharedWith.length > 0 ? (
          <p>Shared with: {itinerary.sharedWith.join(", ")}</p>
        ) : (
          <p>Not shared with anyone</p>
        )}
      </div>
    </li>
  );
};

export default ItineraryItem;
