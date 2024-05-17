import "./case-studies.css";
import caseLogo from "../../images/case-study.png";
import { CaseStudy } from "../../components/case-studies/Case";
import juju from "../../images/juju.png";
import jujuSite from "../../images/juju-phones.png";
import bleyt from "../../images/bleyt-logo.png";
import bleytSite from "../../images/bleyt-site.png";
import flexenclosure from "../../images/flexenclosure.png";
import flexenclosureSite from "../../images/flexenclosure-site.png";
import aella from "../../images/aella-logo.png";
import aellaSite from "../../images/aella-site.png";
import providus from "../../images/providus.png";
import providusSite from "../../images/providusSite.png";
import papstra from "../../images/papstra.png";
import papstraSite from "../../images/papstraSite.png";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      name: "juju",
      logo: juju,
      image: jujuSite,
      head: "UseJuju",
      text: "A user-centric platform designed for you to provides a  smarter way to collect payments, send money and get all  the tools needed to build exciting business solutions",
    },
    {
      id: 2,
      name: "bleyt",
      logo: bleyt,
      image: bleytSite,
      head: "Bleyt",
      text: "It’s a digital web and app-based platform that provides an ecosystem of financial solutions to supports individuals and  businesses.",
    },
    {
      id: 3,
      name: "flexenclosure",
      logo: flexenclosure,
      image: flexenclosureSite,
      head: "Flexenclosure",
      text: "A telecomm platform designed to be a leader in its field and has pioneered the deployment of sustainable green  power infrastructure across Africa and Asia.",
    },
    {
      id: 4,
      name: "aella",
      logo: aella,
      image: aellaSite,
      head: "Aella",
      text: "Smart financial solutions platform designed for you to Access loans, Pay bills, Save, Insure your health and more in  one place",
    },
    {
      id: 5,
      name: "providus",
      logo: providus,
      image: providusSite,
      head: "Providus Bank",
      text: "A digital banking platform designed to be a leader in its field and has pioneered the deployment of sustainable payment, wallet system and so on."
    },
    {
      id: 6,
      name: "papstra",
      logo: papstra,
      image: papstraSite,
      head: "Papstra",
      text: "A telecommunication platform designed to be a leader in its field and has pioneered the deployment of sustainable SMS, WhatsApp, Email, Voice messaging",
    },
  ];
  return (
    <div className="case">
      <div className="case-head">
        <img src={caseLogo} alt="case" />
        <p className="case-text">
          We're proud to showcase a selection of the projects we've expertly
          designed and built for our valued clients.
        </p>
      </div>
      <div className="case-studies">
        {caseStudies.map((caseStudy) => {
          return <CaseStudy {...caseStudy} />;
        })}
      </div>
    </div>
  );
};

export default CaseStudies;
