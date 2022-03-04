import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
    <img className="nav__logo" src="/images/netflix-logo.png" alt="Netflix Logo"/>

    <img className="nav__avatar"  src="/images/netflix-profile.jpg" alt="Netflix profile"/>
    </div>
  )
}

export default Nav