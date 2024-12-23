import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Destinations({ searchTerm }) {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/destinations")
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
      });
  }, []);
  const copyOfDestinations=[...destinations]
  const filteredDestinations = copyOfDestinations.filter((destination) =>
    destination.place_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4 main-card">
      {filteredDestinations.map((ele, index) => (
        <NavLink to="/hotels" key={index}>
          <div className="col">
            <div className="card">
              <img src={ele.image_url} className="card-img-top Image" alt={ele.place_name} />
              <div className="card-body">
                <h5 className="card-title">Place name: { ele.place_name}</h5>
                <p className="card-text">Description: {ele.description}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Destinations;
