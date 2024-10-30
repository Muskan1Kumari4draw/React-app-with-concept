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
        {
          data.map((item, index) => (
            <div key={index} className="restaurant-item">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">Visit website</a>
            </div>
          ))

          // Add your own data mapping here

          // Example:
          // <div key={index} className="restaurant-item">
          //   <h2>{item.name}</h2>
          //   <p>{item.description}</p>
          //   <a href={item.url} target="_blank" rel="noopener noreferrer">Visit website</a>
          // </div>

          // End of example data mapping

          // Add more restaurant items as needed

          // Example:
          // <div key={index} className="restaurant-item">
          //   <h2
        }
      </div>
    </>
  );
};

export default Restaurant;
