import React from 'react'
import './AboutMe.css'
import me from '../../Photos/me.jpeg'
const AboutMe = () => {
  return (
    <div id='home' className='about'>
        <div className='photo'>
            <button className='btn-img'><img src={me} className='me-img' alt='Me'/></button>
        </div>  
        <div className='content'>
            <p>Mechanical Engineering Scientist, currently working in INDIAN SPACE RESEARCH ORGANISATION.</p>
        </div>
    </div>
  )
}

export default AboutMe
