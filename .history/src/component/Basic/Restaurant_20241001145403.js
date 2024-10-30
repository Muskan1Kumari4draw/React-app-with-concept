import React, { useState } from "react";
import "./style.css";
import Monument from "./Monument";
import data from "./restaurant.json";
const Restaurant = () => {
  const [monuData, setMonuData] = useState(data);
  // console.log(data);
  const filterItem = (city) => {
    const updateList = data.filter((curElement) => {
      return curElement.city === city;
    });
    setMonuData(updateList);
  };
  return (
    <>
      <div className="navbar-bg">
        <nav class="navbar">
          <div class="menu-nav">
            <button >Mumbai</button>
            <button >Delhi</button>
            <button >Contact</button>
            <button >News</button>
            <button ">Logout</button>
          </div>
        </nav>
      </div>

      <Monument monuData={monuData} />
    </>
  );
};

export default Restaurant;