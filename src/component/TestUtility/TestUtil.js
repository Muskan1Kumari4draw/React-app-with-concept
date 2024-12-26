import React, { useState } from "react";
import Navbar from "./Navbar";
import TextEditor from "./TextEditor";
const TestUtil = () => {
  const [styles, setStyles] = useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const [btn, setBtn] = useState('Light')
  const handletoggle = () => {
    if (styles.color === 'black') {
      setStyles({
        color: 'white',
        backgroundColor: 'black',
      })
    }

  }
  return <>
    <Navbar />
    <TextEditor handletoggle />
  </>;
};

export default TestUtil;
