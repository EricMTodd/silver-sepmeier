import React from 'react'
import instagramLogo from '../../../assets/images/instagram-logo.png'
import emailIcon from '../../../assets/images/email-icon.png'

const Footer = () => {
  return(
    <div id='footer'>
        {/* email: silsepme@gmail.com | insta: @sigh.like.the.moon */}
        <a href='https://www.instagram.com/sigh.like.the.moon/' target='_blank'><img id='instagram-logo' src={instagramLogo} alt='instagram-logo' /></a>
        <a href='mailto:silsepme@gmail.com'><img id='email-icon' src={emailIcon} alt='email-icon' /></a>
      {/* <div id='dev-credit'>
        Made with ❤️ by <a href='https://ericmtodd.herokuapp.com' target='_blank'>Eric M. Todd</a>
      </div> */}
    </div>
  )
}

export default Footer