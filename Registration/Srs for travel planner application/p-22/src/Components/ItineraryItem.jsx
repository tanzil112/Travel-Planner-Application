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
    <li className="itinerary-item">
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
        <button onClick={() => onDuplicate(index)}>Duplicate</button>
        <button onClick={handleShare}>Share</button>
      </div>

      <ul className="itinerary-names-list">
        <li className="itinerary-name">{itinerary.name}</li>
      </ul>

      <div className="itinerary-shared-status">
        {itinerary.sharedWith.length > 0 ? (
          <p>Shared with: {itinerary.sharedWith.join(", ")}</p>
        ) : (
          <p className="status">Not shared with anyone</p>
        )}
      </div>
    </li>
  );
};

export default ItineraryItem;
