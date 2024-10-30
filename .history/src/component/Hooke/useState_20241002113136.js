import React, { useState } from "react";
import "../Basic/style.css";
const UseState = () => {
  const [] = useState();
  return (
    <>
      <div className="container">
        <div className="para">
          <h1>useState Hook</h1>
          <p>
            useState is a built-in React Hook that lets you add state to
            functional components.
          </p>
        </div>
        <div className="container"></div>
        <p>My Data</p>
        <div className="code">
          <button className="btn">Increment</button>
          <button className="btn">Increment</button>
        </div>
      </div>
    </>
  );
};

export default UseState;