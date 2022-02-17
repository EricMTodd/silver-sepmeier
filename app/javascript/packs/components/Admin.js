import React, { useState } from 'react'

const Admin = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitHandler')
  }

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