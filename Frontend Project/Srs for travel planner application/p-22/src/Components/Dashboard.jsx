import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="main">
      <div className="nav1">
        <img src="/img2.png" alt="Logo" />
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <img className="img" src="/img1.png" alt="Dashboard" />
    </div>
  );
}

export default Dashboard;
