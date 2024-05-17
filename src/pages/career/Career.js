import "./career.css"
import careerIcon from "../../images/career-icon.png"
import carrer1 from "../../images/career-1.png"
import carrer2 from "../../images/career-2.png"
import carrer3 from "../../images/career-3.png"
import carrer4 from "../../images/career-4.png"
import carrer5 from "../../images/career-5.png"
import carrer6 from "../../images/career-6.png"
import excellence from "../../images/excellence.png"
import innovation from "../../images/innovation.png"
import selflessness from "../../images/selflessness.png"
import screening from "../../images/screening.png"
import interview from "../../images/interview.png"
import assesment from "../../images/assesment.png"
import offer from "../../images/offer.png"
import curve1 from "../../images/curve-line-1.png"
import curve2 from "../../images/curve-line-2.png"
import curve3 from "../../images/curve-line-3.png"
import calender from "../../images/calender.png"
import location from "../../images/location-sm.png"
import { CallToAction } from "../../components/testimonial/Testimonial"

export const Career = () => {
  return (
    <div className="career">
      <div className="career-head">
        <img src={careerIcon} alt="career" />
        <h4 className="head">
          Within Herlabytes reside some of the most discerning and
          value-oriented intellects.
        </h4>
        <p className="career-text">
          Our team is committed to producing outstanding work, without any
          compromise. We are inquisitive, enthusiastic, receptive, and resolute
          in our pursuit of generating value for all stakeholders, including
          yourself.
        </p>
        <button>View Openings</button>
        <Pictures />
      </div>
      <div className="career-body">
        <div className="values">
          <div className="values-head">
            <h2>Our Value</h2>
            <p>
              Our values are what we believe in. They make us the team we are
              today.
            </p>
          </div>
          <div className="values-body">
            <div className="value">
              <div className="image">
                <img src={excellence} alt="value" />
              </div>
              <div className="text">
                <h4>Excellence</h4>
                <p>
                  We trust amazing people to do amazing things. We are
                  intentional, and we demand the best of ourselves.
                </p>
              </div>
            </div>
            <div className="value">
              <div className="image">
                <img src={innovation} alt="value" />
              </div>
              <div className="text">
                <h4>Innovation</h4>
                <p>
                  The bar isn’t static. We study problems and find better ways
                  to achieve better results.
                </p>
              </div>
            </div>
            <div className="value">
              <div className="image">
                <img src={selflessness} alt="value" />
              </div>
              <div className="text">
                <h4>Selflessness</h4>
                <p>
                  We are helpful, and we believe in treating people the way we
                  expect to be treated.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hiring">
          <div className="hiring-head">
            <h3>Our Hiring Process</h3>
            <p>
              Our work at Herlabytes goes beyond a regular job. We measure
              success and Impact in communities we work with.
            </p>
          </div>
          <div className="hiring-body">
            <div className="hire screening">
              <div className="image">
                <img src={screening} alt="screening" />
              </div>
              <div className="text">
                <h4>Screening</h4>
                <p>
                  The screening process helps us understand your personality and
                  also helps us see if your goals aligns with us as a team. It
                  is important you get through this phase.
                </p>
              </div>
            </div>
            <img src={curve1} alt="curve1" className="curve" width="232px" height="76.219px" />
            <div className="hire interview">
              <div className="image">
                <img src={interview} alt="interview" />
              </div>
              <div className="text">
                <h4>Interview</h4>
                <p>
                  You are then scheduled for an interview with the hiring team.
                  Our interview process is usually fun, exciting and an
                  oppourtunity to learn about you.
                </p>
              </div>
            </div>
            <img src={curve2} alt="curve2" className="curve" width="232px" height="76.219px" />
            <div className="hire assesment">
              <div className="image">
                <img src={assesment} alt="assesment" />
              </div>
              <div className="text">
                <h4>Assesment</h4>
                <p>
                  Successful applicants who make it through the screening and
                  Interview process, are given a simple technical task relating
                  to their skillset.
                </p>
              </div>
            </div>
            <img src={curve3} alt="curve3" className="curve" width="232px" height="76.219px" />
            <div className="hire offer">
              <div className="image">
                <img src={offer} alt="offer" />
              </div>
              <div className="text">
                <h4>Offer</h4>
                <p>
                  Once you have satisfied all requirement for employment, our
                  hiring team would reach out to you with an offer letter along
                  side a work contract.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="positions">
        <div className="positions-head">
          <h2>Open positions</h2>
        </div>
        <div className="positions-body">
            <div className="position">
              <div className="left">
                <h5>Senior Backend Engineer</h5>
                <p>Remote</p>
                <div className="info">
                  <span><img src={calender} alt="calender" /> Posted: Mon. 20 Feb, 2023</span>
                  <span><img src={location} alt="location" /> Lagos, Nigeria</span>
                </div>
              </div>
              <div className="right">
                <button>View Details</button>
              </div>
            </div>
            <div className="position">
              <div className="left">
                <h5>Brand Designer</h5>
                <p>Hybrid</p>
                <div className="info">
                  <span><img src={calender} alt="calender" /> Posted: Mon. 20 Feb, 2023</span>
                  <span><img src={location} alt="location" /> Lagos, Nigeria</span>
                </div>
              </div>
              <div className="right">
                <button>View Details</button>
              </div>
            </div>
            <div className="position">
              <div className="left">
                <h5>Senior Product Manager</h5>
                <p>Onsite</p>
                <div className="info">
                  <span><img src={calender} alt="calender" /> Posted: Mon. 20 Feb, 2023</span>
                  <span><img src={location} alt="location" /> Lagos, Nigeria</span>
                </div>
              </div>
              <div className="right">
                <button>View Details</button>
              </div>
            </div>
        </div>
        </div>
        <div className="testimonial">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

export const Pictures = () => {
  return (
    <div className="pictures">
          <div className="first">
            <div className="one">
              <img src={carrer1} alt="carrer1" />
            </div>
            <div className="two">
              <div className="two-one">
                <img src={carrer2} alt="carrer2" />
              </div>
              <div className="two-two">
                <img src={carrer3} alt="carrer3" />
              </div>
            </div>
          </div>
          <div className="second">
            <div className="two">
              <div className="two-one">
                <img src={carrer4} alt="carrer4" />
              </div>
              <div className="two-two">
                <img src={carrer5} alt="carrer5" />
              </div>
            </div>
            <div className="one">
              <img src={carrer6} alt="carrer6" />
            </div>
          </div>
        </div>
  )
}