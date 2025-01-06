import React, { useState } from "react";

function RangeInputWithRupees() {
  const [value, setValue] = useState(0); // Initialize state for the range value

  const handleChange = (event) => {
    setValue(event.target.value); // Update state when the range changes
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px",  }}>
      <input 
        type="range" 
        min="0" 
        max="10000" 
        step="100" 
        value={value} 
        onChange={handleChange} 
        style={{ width: "200px" }}
      />
      <span style={{color:'white'}}>{`₹ ${value}`}</span>
    </div>
  );
}

export default RangeInputWithRupees;
