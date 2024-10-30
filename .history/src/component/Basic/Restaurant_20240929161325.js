import React, { useState } from 'react';
import "./style.css";
import Monument from "./Monument.js";
import data from './restaurant.json'
const Restaurant = () => {
  const [monuData,setMonuData] = useState(data);
  console.log(data);
  return (
    <>   
      <Monument/>
    </>
  );
};

export default Restaurant;
