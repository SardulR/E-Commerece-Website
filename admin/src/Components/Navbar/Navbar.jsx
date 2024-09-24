import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/hanger_admin_logo.png'
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="navlogo" />
        <img src={navprofile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar