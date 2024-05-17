import React from 'react'
import "./case.css"
import juju from "../../images/juju.png"
import jujuSite from "../../images/juju-phones.png"
import bleyt from "../../images/bleyt-logo.png"
import bleytSite from "../../images/bleyt-site.png"
import flexenclosure from "../../images/flexenclosure.png"
import flexenclosureSite from "../../images/flexenclosure-site.png"
import aella from "../../images/aella-logo.png"
import aellaSite from "../../images/aella-site.png"
import { useNavigate } from 'react-router-dom'

function Case() {
  const navigate = useNavigate();
  const caseStudies = [
    {
      id: 1,
      name: "juju",
      logo: juju,
      image: jujuSite,
      head: "UseJuju",
      text: "A user-centric platform designed for you to provides a  smarter way to collect payments, send money and get all  the tools needed to build exciting business solutions"
    },
    {
      id: 2,
      name: "bleyt",
      logo: bleyt,
      image: bleytSite,
      head: "Bleyt",
      text: "It’s a digital web and app-based platform that provides an ecosystem of financial solutions to supports individuals and  businesses."
    },
    {
      id: 3,
      name: "flexenclosure",
      logo: flexenclosure,
      image: flexenclosureSite,
      head: "Flexenclosure",
      text: "A telecomm platform designed to be a leader in its field and has pioneered the deployment of sustainable green  power infrastructure across Africa and Asia."
    },
    {
      id: 4,
      name: "aella",
      logo: aella,
      image: aellaSite,
      head: "Aella",
      text: "Smart financial solutions platform designed for you to Access loans, Pay bills, Save, Insure your health and more in  one place"
    },
  ]
  return (
    <div className='case'>
    <div className='case-head'>
        <h4>Case Studies</h4>
        <p>Some of the projects we have designed and built for our clients.</p>
    </div>
    <div className='case-studies'>
      {
        caseStudies.map((caseStudy)=> {
          return <CaseStudy  {...caseStudy} />
        })
      }
    </div>
    <div className='case-footer center'>
      <button onClick={()=> navigate("/case-studies")}>View more case studies</button>
    </div>
    </div>
  )
}
export const CaseStudy = ({name, logo,  image, head, text, id}) => {
  const navigate = useNavigate();
  const url = () => {
    const link = window.location.href;
    if(link.includes("case-studies")) {
      return `${id}`;
    }
    return `case-studies/${id}`
  }
  return (
    <div className={`case-study ${name}`}>
        <div className='case-study-head center'>
            <img src={logo} alt={name}></img>
            <img src={image} alt={image}></img>
        </div>
        <div className='case-study-body'>
            <p><strong>{head}:</strong> {text}</p>
            <span onClick={()=> navigate(url())}>Read Case Study</span>
        </div>
      </div>
  )
}

export default Case