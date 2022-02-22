import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin = (props) => {
  const {
    loggedIn
  } = props
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.patch('https://silversepmeier.herokuapp.com/api/user', {
      user: {
        name: name,
        password: password,
      }
    })
    .then(response => {
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('https://silversepmeier.herokuapp.com/api/user')
    .then(response => {
      setName(response.data.user.name)
      setPassword(response.data.user.password)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='admin'>
      <h1>Admin</h1>
      <form onSubmit={submitHandler}>
        <input type='text' name='name' value={name} placeholder='Name' autoComplete='off' onChange={e => setName(e.target.value)} />
        <input type='password' name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <br />
        <br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Admin