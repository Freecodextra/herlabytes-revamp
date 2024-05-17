import "./contact.css"
import customerCare from "../../images/customer-care.png"
import Call from "../../images/Call.png"
import Location from "../../images/Location.png"
import Mail from "../../images/mail.png"
import { CallToAction, TestimonialBody } from "../../components/testimonial/Testimonial";
import femiMathew from "../../images/femi-mathew.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="strategist">
        <div className="left">
          <div className="left-head">
            <h4>Talk to our strategist</h4>
            <p>
              Need a solution that perfectly caters to your business
              requirements? Simply complete the contact form and our strategist
              team will get back to you.
            </p>
          </div>
          <div className="left-image">
            <img src={customerCare} alt="customerCare" />
          </div>
          <div className="left-address">
            <h5>Office Address</h5>
            <ul>
                <li><img src={Location} alt="location" /><span>10 Shonola Street,  Aguda Lagos Nigeria</span></li>
                <li><img src={Call} alt="Call" /><span>+234 903 451 5809</span></li>
                <li><img src={Mail} alt="Mail" /><span>hello@herlabytes.com</span></li>
            </ul>
          </div>
        </div>
        <div className="right-div">      
        <div className="right">
            <div className="form-grp">
                <div className="input">
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" placeholder="Your first name" type="text" />
                </div>
                <div className="input">
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" placeholder="Your first name" type="text" />
                </div>
            </div>
            <div className="input">
                    <label htmlFor="lname">Email</label>
                    <input id="lname" placeholder="name@gmail.com" type="email" />
                </div>
                <div className="checkboxs">
                    <p>What services are you interested in?</p>
                    <div className="checkbox center">
                        <input type="checkbox" id="web" />
                        <label htmlFor="web">Website Development</label>
                    </div>
                    <div className="checkbox center">
                        <input type="checkbox" id="mobile" />
                        <label htmlFor="mobile">Mobile Development</label>
                    </div>
                    <div className="checkbox center">
                        <input type="checkbox" id="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                </div>
                <div className="text-area">
                    <p>How can we help?</p>
                    <textarea placeholder="Write your message here....."></textarea>
                    <button>Send Messgae</button>
                </div>
        </div>
        </div>
      </div>
      <div className="testimonial">
          <TestimonialBody
            testimony="At our core, we are driven by the vision of a world where impactful ideas, exceptional
            products, and successful companies can be brought to life quickly and efficiently. 
            Our mission is to facilitate this process by providing our clients with the tools, 
            resources, and expertise they need to achieve their goals. We are committed to
            streamlining the journey from ideation to execution, empowering our clients to
            succeed in an ever-evolving business landscape."
            image={femiMathew}
            name="Femi MAthew"
            role="CEO, Herlabytes"
          />
        <CallToAction />
        </div>
    </div>
  );
}

export default Contact