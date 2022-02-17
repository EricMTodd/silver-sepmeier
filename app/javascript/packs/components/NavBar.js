import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const {
    loggedIn,
    logoutHandler
  } = props

  const toggleNav = () => {
    let navIcon = document.querySelector('#nav-icon')
    let navLinks = document.querySelector('#nav-links')
    if (navIcon.classList.contains('inactive-nav-icon')) {
      navIcon.classList.remove('inactive-nav-icon')
      navIcon.classList.add('active-nav-icon')
      navLinks.classList.remove('hidden-nav-links')
      navLinks.classList.add('shown-nav-links')
    } else {
      navIcon.classList.remove('active-nav-icon')
      navIcon.classList.add('inactive-nav-icon')
      navLinks.classList.remove('shown-nav-links')
      navLinks.classList.add('hidden-nav-links')
    }
  }

  if (loggedIn) {
    return(
      <div id='nav'>
        NavBar
        <button onClick={() => logoutHandler()}>Log out</button>
      </div> 
    )
  }

  return(
    <div id='nav'>
      <div id='nav-icon' className='inactive-nav-icon' onClick={() => toggleNav()}>
        <span />
        <span />
        <span />
      </div>
      <div id='nav-links' className='hidden-nav-links'>
        <Link to='/' onClick={() => toggleNav()}>About</Link>
      </div>
    </div>
  )
}

export default NavBar