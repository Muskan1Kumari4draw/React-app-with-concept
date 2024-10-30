import React from "react";

const Monument = ({ monuData }) => {
 // destructuring
          const [Id,City ,Monuments,Description,Image];
  return (
    <>
      <section className="section-div">
        {monuData.map((curElement) => (
          // destructuring
          const [Id,City ,Monuments,Description,Image] =curElement
          return (<>
            <div className="card" key={curElement.Id}>
            <div className="container">
              <span className="card-title">
                <b>{curElement.Monuments}</b>
              </span>
              <p className="description">{curElement.Description}</p>
              <img alt="" src={curElement.Image} width="100%" height="50%" />
            </div>
          </div>
        </>))};      
      
      </section>
    </>
  );
};

export default Monument;