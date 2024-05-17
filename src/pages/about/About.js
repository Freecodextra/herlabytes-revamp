import "./about.css"
import about1 from "../../images/about-1.png"
import about2 from "../../images/about-2.png"
import about from "../../images/about.png"
import { CallToAction, TestimonialBody } from "../../components/testimonial/Testimonial"
import femiMathew from "../../images/femi-mathew.png";
import teamLogo from "../../images/team-logo.png";
import emmanuel from "../../images/emmanuel.png";
import femi from "../../images/femi.png";
import idris from "../../images/idris.png";
import ajepe from "../../images/ajepe.png";
import rilwan from "../../images/rilwan.png";
import tunde from "../../images/tunde.png";
import adedigba from "../../images/adedigba.png";
import adetayo from "../../images/adetayo.png";
import inlaks from "../../images/inlaks-1.png";
import providus from "../../images/providus-1.png";
import go from "../../images/go-1.png";
import lagos1 from "../../images/lagos-1.png";
import lagos2 from "../../images/lagos-2.png";
import aella from "../../images/aella-1.png";
import connect from "../../images/connect-1.png";
import pokeet from "../../images/pokeet-1.png";
import flex from "../../images/flex-1.png";
import bleyt from "../../images/bleyt-1.png";
import { Pictures } from "../career/Career";
import Blog from "../../components/blog/Blog";

const About = () => {
    const team1 = [
        {
            name: "Femi Mathew",
            image: femi,
            role: "Chief Executive Officer"
        },
        {
            name: "Emmanuel Obagunwa",
            image: emmanuel,
            role: "Chief Technical Officer"
        },
        {
            name: "Idris Mumeen",
            image: idris,
            role: "Frontend Engineer"
        },
        {
            name: "Ademorin Ajepe",
            image: ajepe,
            role: "UI/UX Designer"
        },
    ]
    const team2 = [
        {
            name: "Rilwan Ogundeko",
            image: rilwan,
            role: "Frontend Engineer"
        },
        {
            name: "ETunde Ayodele",
            image: tunde,
            role: "UI/UX Designer"
        },
        {
            name: "Adetayo Adedigba",
            image: adedigba,
            role: "Frontend Developer"
        },
        {
            name: "AFemi Adetayo",
            image: adetayo,
            role: "Frontend Developer"
        },
    ]
  return (
    <div className="about">
      <div className="about-head">
        <div className="image">
          <img src={about1} alt="about1" />
        </div>
        <div className="text">
          <img src={about} alt="about" />
          <p>
            Our objective is to transform the way in which product development
            is approached, with the aim of enabling all emerging businesses to
            actualize their complete potential. We are dedicated to
            revolutionizing this field, empowering these companies to envision
            and achieve their loftiest goals.
          </p>
        </div>
        <div className="image">
          <img src={about2} alt="about2" />
        </div>
      </div>
      <div className="about-body">
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
        </div>
        <Pictures />
        <div className="visions">
          <div className="vision">
            <h4>Our Vision</h4>
            <p>
              Our vision is to become the leading provider of strategic and
              innovative business solutions, empowering and delivering
              unparalleled services and values of the highest caliber throughout
              the African region.
            </p>
          </div>
          <div className="vision mission">
            <h4>Our Mission</h4>
            <p>
              Our mission is to help businesses succeed by providing them with
              the tools and expertise they need to stay ahead of the curve in
              today's ever- evolving business landscape."
            </p>
          </div>
        </div>
        <div className="team">
        <img src={teamLogo} alt="teamLogo" />
        <p>Meet Our Amazing Team</p>
        <div className="images">
            <div className="first center">
                {
                    team1.map((team, index) => {
                       return <Image {...team} key={index} />
                    })
                }
            </div>
            <div className="second center">
            {
                    team2.map((team, index)=> {
                        return <Image {...team} key={index} />
                    })
                }
            </div>
        </div>
        </div>
        <Blog />
        <div className="companies">
            <h2>Companies that trust us</h2>
            <div className="images">
            <img src={inlaks} alt="inlaks" />
            <img src={providus} alt="providus" />
            <img src={go} alt="go" />
            <img src={aella} alt="inlaks" />
            <img src={connect} alt="connect" />
            <img src={pokeet} alt="pokeet" />
            <img src={flex} alt="flex" />
            <img src={bleyt} alt="inlaks" />
            <img src={lagos1} alt="lagos1" />
            <img src={lagos2} alt="lagos2" />
            </div>
        </div>
        <div className="testimonial">
            <CallToAction />
        </div>
      </div>
    </div>
  );
}

const Image = ({image, name, role}) => {
    const style = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50% / cover no-repeat`
    }
    return (
        <div className="image" style={style}>
            <div>
            <p>{name}</p>
            <p>{role}</p>
            </div>
        </div>
    )
}

export default About