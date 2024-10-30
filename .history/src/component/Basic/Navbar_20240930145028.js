import React, { useState } from 'react'
import data from './restaurant.json'
const Navbar = () => {
  const [list, setlist]= useState()
  const Cities = data.filter
  const handleClick = (city) => {
    setlist(city)
  }
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
