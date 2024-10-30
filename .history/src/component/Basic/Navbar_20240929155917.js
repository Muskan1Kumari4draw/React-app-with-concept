import React, { useState } from "react";
import "./style.css";
import data from './restaurant.json';

const Navbar = () => {
  const [cityData, setCityData] = useState([]); // State to store filtered city data

  const filterItem = (item) => {
    const CityUpdates = data.filter((CityElement) => {
      return CityElement.city === item; // Filter data by city
    });
    setCityData(CityUpdates); // Update state with the filtered data
  };
 
  return (
    <>
      <nav className="navbar">
        <div className="menu-nav">
  
            <button  onClick={() => filterItem(city)}>
              {item.name}
            </button>
    
        </div>
      </nav>

      {/* Display filtered city data */}
      <div className="city-data">
        {cityData.length > 0 ? (
          cityData.map((cityElement, index) => (
            <div key={index} className="restaurant-card">
              <h3>{cityElement.name}</h3>
              <p>Address: {cityElement.address}</p>
              <p>Rating: {cityElement.rating}</p>
            </div>
          ))
        ) : (
          <p>Please select a city to see restaurants</p>
        )}
      </div>
    </>
  );
};

export default Navbar;