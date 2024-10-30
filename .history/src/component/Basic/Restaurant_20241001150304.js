import React, { useState } from "react";
import "./style.css";
import Monument from "./Monument";
import data from "./restaurant.json";

// const uniqueList = data.map((curElement) => {
//   return curElement.city;
// });
// console.log(uniqueList); //to check the city

// convert into set
// const uniqueList = new Set(
//   data.map((curElement) => {
//     return curElement.city;
//   })
// );
// console.log(uniqueList);

// convert it into array
const uniqueList = [
  new Set(
    data.map((curElement) => {
      return curElement.city;
    })
  ),
];
console.log(uniqueList);
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
        <nav className="navbar">
          <div className="menu-nav">
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
