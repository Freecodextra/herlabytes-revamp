import React from "react";
import "./testimonial.css";
import wale from "../../images/wale.png";
import circle from "../../images/test-btn.png";
import call1 from "../../images/call-1.png";
import call2 from "../../images/call-2.png";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-head">
        <h4>
          It's been a real privilege to collaborate with exceptional individuals
          from various industries.
        </h4>
      </div>
      <TestimonialBody 
      testimony="Their ability to quickly grasp our project requirements and deliver
      with precision was remarkable. We are pleased with the system and
      app, which meet our expectations and operate successfully."
      image={wale}
      name="Wale Akanbi"
      role="CTO, Aella"
      />
      <div className="testimonial-footer center">
        <img src={circle} alt="circle" />
      </div>
      <CallToAction />
    </div>
  );
}

export const TestimonialBody = ({testimony, name, role, image}) => {
  return (
    <div className="testimonial-body">
    <div className="testimony">
      <span>
        {testimony}
      </span>
    </div>
    <div className="profile">
      <div className="img">
        <img src={image} alt={image} />
      </div>
      <div className="txt">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  </div>
  )
}
export const CallToAction = () => {
  return (
    <div className="call-to-action">
        <h2>What will you like to Build today?</h2>
        <p>
          Accelerate the implementation of your ideas and projects by utilizing
          our world-class engineering teams.
        </p>
        <button>Let's Talk</button>
        <img src={call1} alt="call1" className="call-1" />
        <img src={call2} alt="call2" className="call-2" />
      </div>
  )
}

export default Testimonial;
