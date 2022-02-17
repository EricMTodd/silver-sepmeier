import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Login from './Login'

const Main = (props) => {
  const {
    loginHandler,
    loggedIn
  } = props


  return(
    <div id='main'>
      <Routes>
        <Route path='/' element={<About loggedIn={loggedIn} />} />
        <Route path='login' element={<Login loginHandler={loginHandler} />} />
      </Routes>
    </div>
  )
}

export default Main