import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Login from './Login'
import Admin from './Admin'

const Main = (props) => {
  const {
    loginHandler,
    loggedIn,
  } = props


  return(
    <div id='main'>
      <Routes>
        <Route path='/' element={<About loggedIn={loggedIn} />} />
        <Route path='/login' element={<Login loginHandler={loginHandler} />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default Main