import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitHandler')
    axios.patch('http://localhost:3000/api/user', {
      name: name,
      password: password
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/user')
    .then(response => {
      console.log(response)
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