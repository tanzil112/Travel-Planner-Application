import React from 'react';
import {  NavLink } from 'react-router-dom';


function Navbar () {
  return (
    <div className="navbar">
      <NavLink to="/home" className="navlink" >Home</NavLink>
      <NavLink to="/package" className="navlink" >Packages</NavLink>
      <NavLink to='/destination' className="navlink" >Destination</NavLink>
      <NavLink to="/flights" className="navlink">Flights</NavLink>
      <NavLink to="/contact" className="navlink" >Contact Us</NavLink>
    </div>
  );
};

export default Navbar;