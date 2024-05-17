import "./case-study.css"
import jujuLogo from "../../images/juju-logo.png"
import jujuImage from "../../images/juju-image.png"
import { CallToAction, TestimonialBody } from "../../components/testimonial/Testimonial";
import femiMathew from "../../images/femi-mathew.png";

const CaseStudy = () => {
  return (
    <div className="single-case-study">
      <div className="head">
        <img src={jujuLogo} alt="juju" />
        <p>
          Juju is a user-centric platform designed for you to provides a smarter
          way to collect payments, send money and get all the tools needed to
          build exciting business solutions. Manage your business finances at
          scale, anytime and anywhere, so you can effortlessly run, grow and
          optimise your business.
        </p>
        <div className="platform">
          <p>Platforms:</p>
          <p>Web/Mobile Applications</p>
        </div>
      </div>
      <div className="image center">
        <img src={jujuImage} alt="juju-image" />
      </div>
      <div className="body">
        <div className="text">
          <div className="platform">
            <p>Problem Statement</p>
          </div>
          <p>
            Small and medium-sized businesses face challenges in managing their
            finances, especially when it comes to collecting payments, sending
            money, and building business solutions. These tasks can be
            time-consuming and complex, making it difficult for businesses to
            focus on growth and optimization. Additionally, existing financial
            management tools may not be user-friendly or may lack the necessary
            features to meet the needs of businesses. Juju aims to address these
            challenges by providing a user-centric platform that offers a
            smarter way to manage business finances. The platform provides
            businesses with a range of tools to collect payments, send money,
            and build business solutions, all in one place. With Juju,
            businesses can manage their finances at scale, anytime and anywhere,
            and easily run, grow, and optimize their business.
          </p>
        </div>
        <div className="text">
          <div className="platform">
            <p>The Solution Statement</p>
          </div>
          <p>
            Juju provides a user-centric platform that offers a smarter way for
            small and medium-sized businesses to manage their finances. The
            platform is designed to provide businesses with a comprehensive set
            of tools to collect payments, send money, and build business
            solutions. Juju's features include a simple and intuitive user
            interface, multiple payment options, invoicing, and reporting
            capabilities, among others. With Juju, businesses can manage their
            finances at scale, anytime and anywhere, which allows them to focus
            on growth and optimization. The platform makes it easy for
            businesses to stay on top of their finances by offering real-time
            insights and automated processes, enabling them to save time and
            reduce manual errors. In summary, Juju provides a complete financial
            management solution for small and medium-sized businesses, allowing
            them to manage their finances effortlessly and effectively.
          </p>
        </div>
        <h2>It's been a real privilege to collaborate with
exceptional individuals from various industries.</h2>
      </div>
      <div className="testimonial">
      <TestimonialBody
            testimony="Their ability to quickly grasp our project requirements and deliver with precision was 
            remarkable. We are pleased with the system and app, which meet our expectations
            and operate successfully."
            image={femiMathew}
            name="Femi MAthew"
            role="CEO, Herlabytes"
          />
        <CallToAction />
      </div>
    </div>
  );
}

export default CaseStudy