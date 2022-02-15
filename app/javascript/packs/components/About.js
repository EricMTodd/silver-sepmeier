import React from 'react'

const About = (props) => {
  const {
    about
  } = props
  return(
    <div id='about'>
      <h1>About</h1>
      <p>{about}</p>
    </div>
  )
}

export default About