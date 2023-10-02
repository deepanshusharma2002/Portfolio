import React from 'react'
import './Intro.css'
import bg from '../../assets/logo1.ico';
import btnImg from '../../assets/hireme.png';
import { Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'> I'm <span className='introName'>Deepanshu</span> <br/> Website Designer <br/></span>
            <p className='introPara'>I am a skilled and passionate Web Designer with experience in creating<br/> visually appealing and user-friendly Websites</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
