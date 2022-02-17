import React from 'react'
import silverPortrait from '../../../assets/images/silver-portrait.png'

const About = (props) => {
  const {
    about
  } = props
  return(
    <div id='about'>
      <div id='about-header'>
        <h1>Silver Sepmeier</h1>
        <img src={silverPortrait} alt='Portrait' id='silver-portrait'/>
      </div>
      <p>{about}</p>
    </div>
  )
}

export default About