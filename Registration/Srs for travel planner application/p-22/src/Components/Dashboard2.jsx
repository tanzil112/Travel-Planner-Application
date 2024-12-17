import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Dashboard2() {
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/");
  };

  return (
    <>
    
      <div id="header1">
        <div className="logo-container">
          <img src="img4.png" alt="Logo" className="logo" />
          <button onClick={handleEvent} className="signin-btn">Sign Out</button>
        </div>

        <Navbar />

        <div className="search-container">
          <span className="search-label">Search</span>
          <input 
            type="text" 
            placeholder="Search Destinations" 
            className="search-input" 
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard2;
