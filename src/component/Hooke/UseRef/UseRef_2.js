import React, { useState, useEffect, useRef } from 'react';
import "../../Basic/style.css";


const UseRef_2 = () => {
  const [num, setNum] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = "red";
    }
    console.log(`First rendering`);
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <div className="container"></div>
      <p>{num}</p>
      <div className="code">
        {/* Correctly assign ref to the button */}
        <button
          className="btn"
          ref={ref}
          onClick={() => setNum(num + 1)}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseRef_2;
