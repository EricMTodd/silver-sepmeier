import React from 'react'

const NavBar = (props) => {
  const {
    loggedIn,
    logoutHandler
  } = props

  if (loggedIn) {
    return(
      <div id='nav-bar'>
        NavBar
        <button onClick={() => logoutHandler()}>Log out</button>
      </div> 
    )
  }

  return(
    <div id='nav-bar'>
      NavBar
    </div>
  )
}

export default NavBar