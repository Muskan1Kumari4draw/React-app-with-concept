import React, { useState } from 'react';
import "./style.css";
import Monument from "./Monument";
import data from './restaurant.json'
const Restaurant = () => {
  const [monuData,setMonuData] = useState(data);
  console.log(data);
  return (
    <>   
      <Monument monuData = {monuData}/>
    </>
  );
};

export default Restaurant;