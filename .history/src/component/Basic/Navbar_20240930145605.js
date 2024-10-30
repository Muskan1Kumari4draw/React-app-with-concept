import React, { useEffect, useState } from 'react'
import data from './restaurant.json'
const Navbar = () => {
  const [city, setCity]= useState()
  const Cities = data.filter(cityName => cityName === Delhi)
  const handleClick = (city) => {
    setCity(Cities)
  }
  useEffect(()=>{

  })
  return (
    <div className='navbar'>
      <ul>
        <button onclick={handleClick} >
        Mumbai 
        </button>
        <button>
        Delhi 
        </button>
      </ul>
    </div>
  )
}

export default Navbar
