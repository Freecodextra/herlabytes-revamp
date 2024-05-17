import React from 'react'
import "./services.css"

function Services() {
  return (
    <div className='services'>
    <div className='services-head'>
        <h4>Digital Solutions We Offer</h4>
        <p>Herlabytes helps you set the stage for user-centric products by implementing the right strategies through a combination of market research, agile sprints, and wide-ranging expertise.</p>
    </div>
    <div className='services-cards'>
        <div className='card design'>
            <div className='card-text'>
                <h6>design</h6>
                <p>User Interface Design (UI) <br />
                User Experience Design (UX) <br />
                Graphic Design</p>
            </div>
        </div>
        <div className='card engineering'>
            <div className='card-text'>
                <h6>engineering</h6>
                <p>Simplify your business process with fully <br /> 
                functional, visually-compelling web and <br />
                mobile applications.</p>
            </div>
        </div>
        <div className='card team'>
            <div className='card-text'>
                <h6>team augmentation</h6>
                <p>We help you set the stage for user-centric <br />
products by implementing the right strategies<br />
through a combination of market research, <br />
agile sprints, and wide-ranging expertise.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services