import React from 'react';

const Monument = ({ monuData }) => {
  return (
    <>
      {monuData.map((curElement) => (
        <section className="section-div" key={curElement.Id}>
          <div className="card">
            <div className="container">
              <span className="card-title"><b>{curElement.Monuments}</b></span>
              <p className="description">{curElement.Description}</p>
              <img alt="" src={curElement.Image} width="100%" height="50%" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Monument;
