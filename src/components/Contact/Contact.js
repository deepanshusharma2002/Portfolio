import React from 'react'
import './Contact.css'
import FaceboolIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';


const Contact = () => {
  return (
    <section id='contactPage'>
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunties</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'/>
        <input type='email' className='email' placeholder='Your email'/>
        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value="send" className='submitBtn'>Submit</button>
        <div className='links'>
            <img src={FaceboolIcon} alt='Facebook' className='link'/>
            <img src={TwitterIcon} alt='Twitter' className='link'/>
            <img src={YoutubeIcon} alt='Youtube' className='link'/>
            <img src={instagramIcon} alt='Instagram' className='link'/>
        </div>
      </form>
    </div>
    </section>
  )
}

export default Contact
