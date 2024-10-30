import React from "react";
import "./style.css";
import data from './restaurant.json';

const Navbar = () => {
const filterItem = (item) => {
  const CityUpdates = data.filter((CityElement) => {
    return CityElement.city === item;
  });
}
  return (
    <nav className="navbar">
      <div className="menu-nav">


    {
      navBar.map((item, index) => (
        <button key={index}>
          {item.name}
        </button>
      ))
    }
      </div>
    </nav>
  );
};

export default Navbar;
