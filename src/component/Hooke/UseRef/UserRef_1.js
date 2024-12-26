import React, { useState, useEffect, useRef } from 'react'

const UserRef_1 = () => {
  const [num, setNum] = useState(0);
  // let a = 0;
  // useEffect(() => {
  //   a = a + 1;

  //   console.log(`rendereing ${a}`)
  // })

  const a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;

    console.log(`rendereing ${a.current}`)
  })


  return (
    <div>
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
          Decrement
        </button>
      </div>
    </div>
  )
}

export default UserRef_1
