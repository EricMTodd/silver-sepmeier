import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Login from './Login'

const Main = (props) => {
  const {
    loginHandler,
    about
  } = props


  return(
    <div id='main'>
      <Routes>
        <Route path='/' element={<About about={about} />} />
        <Route path='login' element={<Login loginHandler={loginHandler} />} />
      </Routes>
    </div>
  )
}

export default Main