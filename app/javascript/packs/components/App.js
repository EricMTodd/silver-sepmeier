import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const loginHandler = (data) => {
    console.log('loginHandler')
    console.log(data)
    setLoggedIn(data.loggedIn)
    setUser(data.user)
    navigate('/')
  }

  const logoutHandler = () => {
    console.log('logoutHandler')
    axios.delete('http://localhost:3000/api/logout')
    .then(response => {
      console.log(response)
      setLoggedIn(response.data.loggedIn)
      setUser(response.data.user)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/loggedIn')
    .then(response => {
      console.log(response)
      setLoggedIn(response.data.loggedIn)
      setUser(response.data.user)
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