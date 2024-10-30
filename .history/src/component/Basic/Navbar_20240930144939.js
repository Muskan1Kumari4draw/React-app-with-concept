import React, { useState } from 'react'

const Navbar = () => {
  const [list, setlist]= useState()
  return (
    <div className='navbar'>
      <ul>
        <button>
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
