import React, { useE, useEffectffect } from "react";
import "../Basic/style.css";
const useEffect = () => {
  const [num, setNum] = useEffect(0);
  // console.log(num);
  // console.log(setNum);
  return (
    <>
      <div className="container">
        <div className="para">
          <h1>useEffect Hook</h1>
          <p>
            useEffect is a built-in React Hook that lets you add state to
            functional components.
          </p>
        </div>
        <div className="container"></div>
        <p>{num}</p>
        <div className="code">
          <button className="btn" onClick={() => setNum(num + 1)}>
            Increment
          </button>
          <button
            className="btn"
            onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
};

export default UseEffect;