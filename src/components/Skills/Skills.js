import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web Designer with experience in creating visually appealingand user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well as design software such as Abode Photoshop and Illustrator.</span>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>UI/UX design</h2>
            <p>UI and UX design have often been used as interchangeable terms.</p>
        </div>
        </div>

        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>Website Design</h2>
            <p> Web design refers to the design of websites that are displayed on the internet. </p>
        </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>App Design</h2>
            <p>App design refers to the visual aspects of an application such as a mobile app.</p>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Skills
