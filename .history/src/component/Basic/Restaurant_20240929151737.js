import React from 'react';
import "./style.css";
import data from './restaurant.json'
const Restaurant = () => {
  return (
    <>
    
  <section class="section-div">
    {
        data.map((area,index) =>{
        return (
<div className="card" key ={index}>
        <div className="container">
          <span className="card-title"><b>{area.Monuments}</b></span>
          <p className="description">{area.Description}</p>
          <img  alt="" src={area.Image}/>
        </div>
      <div>
      </div>
      </div>
        )})
        }
     </section>   
    
      
    </>
  );
};

export default Restaurant;
