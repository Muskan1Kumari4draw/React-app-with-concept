import React, { useEffect, useState } from 'react'
import data from './restaurant.json'
const Navbar = () => {
  const [city, setCity]= useState()
  const Cities = data.filter(cityName => cityName.city === city)
  const handleClick = (city) => {
    setCity(Cities)
  }
  useEffect(()=>{

  })
  return (
    <div className='navbar'>
      <ul>
        <button >
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
