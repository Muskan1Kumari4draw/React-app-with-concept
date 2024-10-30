import React from "react";

const Monument = ({ monuData }) => {
  return (
    <section className="section-div">
      {monuData && monuData.length > 0 ? (
        monuData.map((curElement) => {
          // Destructuring
          const { Id, City, Monuments, Description, Image } = curElement;

          return (
            <div className="card" key={Id}>
              <div className="container">
                <span className="card-title">
                  <b>{Monuments}</b>
                </span>
                <p className="description">{Description}</p>
                <img alt={Monuments} src={Image} width="100%" height="50%" />
              </div>
            </div>
          );
        })
      ) : (
        <p>No monuments available</p> // Fallback message
      )}
    </section>
  );
};

export default Monument;
