import React from 'react';
import "./style.css";
import data from './restaurant.json'
const Restaurant = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <span className="card-title"><b>John Doe</b></span>
          <p className="description">Architect and Engineer</p>
          <img  alt="Portrait of John Doe, Architect and Engineer" />
        </div>
      <div>
        {
          data.map((item, index) =>{
            return (
              <div key ={index}>
                <h1>{item.placeName}</h1>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  );
};

export default Restaurant;
