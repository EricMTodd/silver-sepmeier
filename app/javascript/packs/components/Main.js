import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Login from './Login'
import Admin from './Admin'
import Gallery from './Gallery'
import NotFound from './NotFound'

const Main = (props) => {
  const {
    loginHandler,
    loggedIn
  } = props


  if (loggedIn) {
    return(
      <div id='main'>
      <Routes>
        <Route path='/' element={<About loggedIn={loggedIn} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    )
  }

  return(
    <div id='main'>
      <Routes>
        <Route path='/' element={<About loggedIn={loggedIn} />} />
        <Route path='/login' element={<Login loginHandler={loginHandler} />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main