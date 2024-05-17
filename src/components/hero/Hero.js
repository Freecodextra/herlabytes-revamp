import React from 'react'
import "./hero.css"
import rect from "../../images/Rectangle 72.png"
import circle from "../../images/Ellipse 82.png"
import line from "../../images/Vector 10.png"

function Hero() {
  return (
    <div className='hero center'>
    <img src={rect} alt='' className='image rect1'/>
    <img src={rect} alt='' className='image rect2'/>
    <img src={circle} alt='' className='image circle1'/>
    <img src={circle} alt='' className='image circle2'/>
    <img src={line} alt='' className='image line'/>
        <h1>We Create Cutting-Edge Software Solutions for Businesses</h1>
        <p>Our team of experts will work closely with you to understand your business goals and create a custom software solution that streamlines processes, improves efficiency, and propels growth</p>
        <button>Let's Talk</button>
    </div>
  )
}

export default Hero