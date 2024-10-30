import React, { useState } from "react";
import "./style.css";
import Monument from "./Monument";
import data from "./restaurant.json";

const uniqueList = data.map((curElement) => {
  return curElement.city;
});
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
            <button onClick={() => filterItem("Mumbai")}>Mumbai</button>
            <button onClick={() => filterItem("Delhi")}> Delhi</button>
            <button onClick={() => setMonuData(data)}> Delhi</button>
          </div>
        </nav>
      </div>

      <Monument monuData={monuData} />
    </>
  );
};

export default Restaurant;