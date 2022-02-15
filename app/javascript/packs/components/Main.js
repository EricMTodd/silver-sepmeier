import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'

const Main = () => {
  return(
    <div id='main'>
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
    </div>
  )
}

export default Main