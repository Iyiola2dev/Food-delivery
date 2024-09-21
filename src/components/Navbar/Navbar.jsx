import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='h-[200px]' src={assets.logo} alt="" />
    </div>
  )
}

export default Navbar