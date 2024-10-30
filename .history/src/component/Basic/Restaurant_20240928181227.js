import React from 'react';
import "./style.css"

const Restaurant = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <span className="card-title"><b>John Doe</b></span>
          <p className="description">Architect and Engineer</p>
          <img  alt="Portrait of John Doe, Architect and Engineer" />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
