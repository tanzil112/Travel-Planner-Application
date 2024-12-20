import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Adjust as needed
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <NavLink to="/home" className="navlink">Home</NavLink>
      <NavLink to="/package" className="navlink">Packages</NavLink>
      <NavLink to="/itinerary" className="navlink">Itinerary Organizer</NavLink>
      <NavLink to="/hotels" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>Hotels</NavLink>
      <NavLink to="/flights" className="navlink">Flights</NavLink>
      <NavLink to="/contact" className="navlink">Contact Us</NavLink>
    </div>
  );
}

export default Navbar;
