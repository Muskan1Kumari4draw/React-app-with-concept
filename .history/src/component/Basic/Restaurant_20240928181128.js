import React from 'react';
import india from './india.jpeg'; // Make sure to import the image properly

const Restaurant = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <span className="card-title"><b>John Doe</b></span>
          <p className="description">Architect and Engineer</p>
          <img src={india} alt="Portrait of John Doe, Architect and Engineer" />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
