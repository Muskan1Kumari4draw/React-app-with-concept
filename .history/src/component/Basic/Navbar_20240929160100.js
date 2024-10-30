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
  const navBar = [
    { name: "Mumbai" },
    { name: "Delhi" },
  ]
 
  return (
    <>
      <nav className="navbar">
        <div className="menu-nav">
          {navBar.map((item, index) => (
            <button key={index} onClick={() => filterItem(item.city)}>
              {item.city}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;