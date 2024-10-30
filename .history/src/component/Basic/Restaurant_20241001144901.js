import React, { useState } from "react";
import "./style.css";
import Monument from "./Monument";
import data from "./restaurant.json";
const Restaurant = () => {
  const [monuData, setMonuData] = useState(data);
  console.log(data);
  return (
    <>
      <div className="navbar-bg">
        <nav class="navbar">
          <div class="menu-nav">
            <button href="#home">Home</button>
            <button href="#about">About</button>
            <button href="#contact">Contact</button>
            <button href="#news">News</button>
            <button href="#logout">Logout</button>
          </div>
        </nav>
      </div>

      <Monument monuData={monuData} />
    </>
  );
};

export default Restaurant;
