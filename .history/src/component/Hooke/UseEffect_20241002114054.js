import React, { useState, useEffect } from "react";
import "../Basic/style.css";
const UseEffect = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="container">
        <div className="para">
          <h1>useEffect Hook</h1>
          <p></p>
        </div>
        <div className="container"></div>
        <p>{num}</p>
        <div className="code">
          <button className="btn" onClick={() => setNum(num + 1)}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
