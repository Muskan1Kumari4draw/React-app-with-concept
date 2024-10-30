import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <select placeholder="Tourist" >
        <option value="Mumbai" ><a href="/mumbai">Mumbai</a></option>
        <option value="Delhi">Delhi</option>
        <option value="Patna">Patna</option>

      </select>
    </div>
  )
}

export default Dropdown
