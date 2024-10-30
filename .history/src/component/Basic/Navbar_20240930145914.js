import React, { useEffect, useState } from 'react'
import data from './restaurant.json'
import Dropdown from './Dropdown'
const Navbar = () => {
  const [city, setCity]= useState()
  const Cities = data.filter(cityName => cityName === city.Delhi)
  const handleClick = (city) => {
    setCity(Cities)
  }
  useEffect(()=>{

  })
  return (
    <div className='navbar'>
      <Dropdown/>
    </div>
  )
}

export default Navbar
