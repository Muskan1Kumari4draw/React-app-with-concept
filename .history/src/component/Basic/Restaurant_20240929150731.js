import React from 'react';
import "./style.css";
import data from './restaurant.json'
const Restaurant = () => {
  return (
    <>
    {
        data.map((area,index) =>{
        return (
<div className="card" key ={index}>
        <div className="container">
          <span className="card-title"><b>John Doe</b></span>
          <p className="description">Architect and Engineer</p>
          <img  alt="Portrait of John Doe, Architect and Engineer" />
        </div>
      <div>
      </div>
      </div>
        )})
        }
        
    
      
    </>
  );
};

export default Restaurant;
