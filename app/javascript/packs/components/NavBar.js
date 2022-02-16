import React from 'react'

const NavBar = (props) => {
  const {
    loggedIn,
    logoutHandler
  } = props

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
      <div id='nav-icon'>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default NavBar