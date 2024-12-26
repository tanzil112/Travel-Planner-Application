import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    
    <div className="main">
      <div className="nav1">
        <img src="/img2.png" alt="Logo" />
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About us</Link>
          </div>
       </div>
    </div>

   
    </>
  );
}

export default Dashboard;
