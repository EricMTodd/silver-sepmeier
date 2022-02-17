import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
  const {
    loginHandler
  } = props
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitHandler')
    axios.post('http://localhost:3000/api/login', {
      name: name,
      password: password
    })
    .then(response => {
      loginHandler(response.data)
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='login'>
      <h1>Log in</h1>
      <br />
      <form onSubmit={submitHandler}>
        <input type='text' name='name' value={name} placeholder='Name' autoComplete='off' onChange={e => setName(e.target.value)} />
        <br />
        <input type='password' name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <br />
        <br />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login