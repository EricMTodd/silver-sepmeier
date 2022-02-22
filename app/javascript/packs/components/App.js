import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const loginHandler = (data) => {
    setLoggedIn(data.loggedIn)
    navigate('/')
  }

  const logoutHandler = () => {
    axios.delete('https://silversepmeier.herokuapp.com/api/logout')
    .then(response => {
      setLoggedIn(response.data.loggedIn)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('https://silversepmeier.herokuapp.com/api/logged_in')
    .then(response => {
      setLoggedIn(response.data.loggedIn)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='app'>
      <NavBar loggedIn={loggedIn} logoutHandler={logoutHandler} />
      <Main loginHandler={loginHandler} loggedIn={loggedIn} />
      <Footer />
    </div>
  )
}

export default App