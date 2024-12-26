import React, { useReducer } from "react";
import "../Basic/style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    return state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="container">
        <div className="para">
          <h1>UseReducer Hook</h1>
        </div>
        <p>{state}</p>
        <div className="code">
          <button className="btn" onClick={() => dispatch({ type: "INCR" })}>
            Increment
          </button>
          <button className="btn" onClick={() => dispatch({ type: "DECR" })}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
