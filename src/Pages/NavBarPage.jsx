import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const NavBarPage = () => {
  return (
   <nav className='nav-bar'>
     <div className="logo">
        JobConnect
      </div>
    <div className="nav-links">
        <a href="*">Home</a>
        <a href="#jobs">Find Jobs</a>
        <a href="#about">About</a>
      </div>
    <div className="nav-buttons">
       <Link to='/login' className='btn btn-primary'>Login</Link>
       <Link to='/register' className='btn btn-danger'>Register</Link>
      </div>
   </nav>
  )
}

export default NavBarPage
