import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Range from "./Range";
import Destinations from './Destinations';

function Dashboard2() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEvent = () => {
    navigate("/");
  };

  return (
    <>
      <div id="header1">
        <div className="logo-container">
          <img src="img4.png" alt="Logo" className="logo" />
          <button
            onClick={handleEvent}
            className="signin-btn"
            style={{
              transition: 'color 0.33s linear 0.5s, border-color 0.5s ease-in, background-color 0.99s linear 0s'
            }}
          >
            Sign Out
          </button>
        </div>

        <Navbar />

        <div className="destination">
          Search for your next escape.
        </div>
        <div className="details-container">
          <div id="details">
            <span>Search :</span>
          </div>
          <div id="input">
            <input
              className='input'
              placeholder='Enter destination'
              style={{ borderRadius: "100px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
          
       <div className="pd">
        Popular Destinations
       </div>
        

        <Destinations searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default Dashboard2;
