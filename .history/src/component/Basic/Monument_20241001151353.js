import React from "react";

const Monument = ({ monuData }) => {
  return (
    <>
      <section className="section-div">
        {monuData.map((curElement) => {
          // destructuring
          const { Id, city, Monuments, Description, Image } = curElement;
          return (
            <div className="card" key={Id}>
              <div className="container">
                <span className="card-title">
                  <b>{Monuments}</b>
                </span>
                <p className="description">{Description}</p>
                <img alt="" src={Image} width="100%" height="50%" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Monument;
