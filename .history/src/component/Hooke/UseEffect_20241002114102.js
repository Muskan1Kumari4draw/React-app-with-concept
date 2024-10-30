import React, { useState, useEffect } from "react";
import "../Basic/style.css";
const UseEffect = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="container">
        <div className="para">
          <h1>useEffect Hook</h1>
          <p>
            useEffect is a React hook that allows you to perform side effects in
            functional components. It is a powerful tool for managing state and
            other side effects in your components. In this example, we will use
            the useEffect hook to update the document title every time the
            component renders.
            <br />
            Click the "Increment" button to see the number increment and the
            updated document title.
            <br />
            The useEffect hook is triggered after the first render of the
            component, as well as after every update to the component's
            dependencies.
            <br />
            In this example, the useEffect hook is used to update the document
            title when the component renders. The document title is set to
            "React Counter - {num}" every time the component renders.
            <br />
            The dependency array [] ensures that the useEffect hook will only
            run when the component renders for the first time, not after every
            update.
            <br />
            Clicking the "Increment" button will increment the state variable
            "num" and
          </p>
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
