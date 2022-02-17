import React from 'react'

const NavBar = (props) => {
  const {
    loggedIn,
    logoutHandler
  } = props

  const toggleNav = () => {
    console.log('toggleNav')
    let navIcon = document.querySelector('#nav-icon')
    if (navIcon.classList.contains('inactive-nav-icon')) {
      navIcon.classList.remove('inactive-nav-icon')
      navIcon.classList.add('active-nav-icon')
    } else {
      navIcon.classList.remove('active-nav-icon')
      navIcon.classList.add('inactive-nav-icon')
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
    </div>
  )
}

export default NavBar