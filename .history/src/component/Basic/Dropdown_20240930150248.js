import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <select placeholder="Tourist" >
        <option value="Mumbai" ><a href="/mumbai">Mumbai</a></option>
        <option value="Delhi"><a href="/mumbai">Delhi</a></option>
        <option value="Patna"><a href="/mumbai">Patna</a></option>

      </select>
    </div>
  )
}

export default Dropdown