import React, { useEffect, useState } from 'react'
import axios from 'axios'
import silverPortrait from '../../../assets/images/silver-portrait.png'

const About = (props) => {
  const {
    loggedIn
  } = props
  const [currentAbout, setCurrentAbout] = useState('')
  const [newAbout, setNewAbout] = useState('')
  
  const toggleForm = () => {
    setNewAbout(currentAbout)
    let aboutText = document.querySelector('#about-text')
    let toggleUpdateAboutFormButton = document.querySelector('#toggle-update-about-form-button') 
    let updateAboutForm = document.querySelector('#update-about-form')
    if (updateAboutForm.classList.contains('hidden-update-about-form')) {
      aboutText.classList.remove('shown-about-text')
      aboutText.classList.add('hidden-about-text')
      toggleUpdateAboutFormButton.innerText = 'Hide'
      updateAboutForm.classList.remove('hidden-update-about-form')
      updateAboutForm.classList.add('shown-update-about-form')
    } else {
      aboutText.classList.remove('hidden-about-text')
      aboutText.classList.add('shown-about-text')
      toggleUpdateAboutFormButton.innerText = 'Edit'
      updateAboutForm.classList.remove('shown-update-about-form')
      updateAboutForm.classList.add('hidden-update-about-form')
    }
  }
  
    const submitHandler = (e) => {
      e.preventDefault()
      console.log('submitHandler')
      axios.patch('http://localhost:3000/api/user', {
        about: newAbout
      })
      .then(response => {
        console.log(response)
        setCurrentAbout(newAbout)
        toggleForm()
      })
      .catch(error => console.log(error))
    }

  useEffect(() => {
    axios.get('http://localhost:3000/api/user')
    .then(response => {
      console.log(response)
      setCurrentAbout(response.data.user.about)
      setNewAbout(response.data.user.about)
    })
  }, [])

  if (loggedIn) {
    return(
      <div id='about'>
        <div id='about-header'>
          <h1>Silver Sepmeier</h1>
          <img src={silverPortrait} alt='Portrait' id='silver-portrait'/>
        </div>
        <button onClick={() => {toggleForm()}} id='toggle-update-about-form-button'>Edit</button>
        <br />
        <br />
        <form onSubmit={submitHandler} id='update-about-form' className='hidden-update-about-form'>
          <textarea type='text' name='newAbout' value={newAbout} placeholder='Enter any details about yourself you would like.' onChange={e => setNewAbout(e.target.value)} />
          <br />
          <button type='submit'>Save</button>
        </form>
      <p id='about-text' className='shown-about-text'>{currentAbout}</p>
      </div>
    )
  }

  return(
    <div id='about'>
      <div id='about-header'>
        <h1>Silver Sepmeier</h1>
        <img src={silverPortrait} alt='Portrait' id='silver-portrait'/>
      </div>
      <p>{currentAbout}</p>
    </div>
  )
}

export default About