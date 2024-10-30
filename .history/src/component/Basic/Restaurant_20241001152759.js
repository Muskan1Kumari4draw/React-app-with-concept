import React, { useState } from "react";
import "./style.css";
import Monument from "./Monument";
import data from "./restaurant.json";
import Navbar from "./Navbar";

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
// const uniqueList = [
//   new Set(
//     data.map((curElement) => {
//       return curElement.city;
//     })
//   ),
// ];
// console.log(uniqueList);
//Use of spread operator
const uniqueList = [
  ...new Set(
    data.map((curElement) => {
      return curElement.city;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [monuData, setMonuData] = useState(data);
  const [monuCity, setMonuCity] = useState(uniqueList);

  // console.log(data);
  const filterItem = (city) => {
    const updateList = data.filter((curElement) => {
      return curElement.city === city;
    });
    setMonuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} monuCity={monuCity} />

      <Monument monuData={monuData} />
    </>
  );
};

export default Restaurant;
