import "./service.css";
import serviceLogo from "../../images/service.png";
import techGrp from "../../images/tech-grp.png";
import codeLine from "../../images/code-lins.png";
import productDesign from "../../images/product-design.png";
import ladyGuy from "../../images/lady-guy.png";
import femiMathew from "../../images/femi-mathew.png";
import { CallToAction, TestimonialBody } from "../../components/testimonial/Testimonial";

const Service = () => {
  return (
    <div className="service">
      <div className="service-head">
        <img src={serviceLogo} alt="service" />
        <p className="service-text">
          Our team comprises experienced product managers, skilled designers,
          and talented developers who collaborate to deliver exceptional product
          solutions to companies. We are dedicated to helping our clients build
          outstanding products that meet their business needs and exceed user
          expectations."
        </p>
      </div>
      <div className="service-body">
        <div className="btn-img">
          <div className="btn">
            <button>Let's Talk</button>
          </div>
          <div className="img">
            <img src={techGrp} alt="techgrp" />
          </div>
        </div>
        <div className="serve center engineer">
          <div className="serve-img center">
            <img src={codeLine} alt="codeLine" />
          </div>
          <div className="serve-text">
            <div className="head">
              <h1>Engineering</h1>
              <p>
                Develop, build and ship world-class products that make a
                difference. Save time, cost, energy and get the best results
                when you build with Herlabytes
              </p>
            </div>
            <div className="body">
              <div className="sub-body">
                <h6>Web Development</h6>
                <p>
                  We build responsive, scalable enterprise and cloud-based
                  applications for the web
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Mobile Development</h6>
                <p>
                  You want to build native or cross platform apps for android OS
                  or IOS. We are here for you.
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Devops and Infrastructure</h6>
                <p>
                  We manage your cloud infrastructure. GCP, AWS, DigitalOcean
                  and setup processes for efficiency and also minimize cost
                </p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="serve center design">
          <div className="serve-img center">
            <img src={productDesign} alt="productDesign" />
          </div>
          <div className="serve-text">
            <div className="head">
              <h1>Design</h1>
              <p>
                Our design team is committed to delivering state-of-the-art
                product designs by harnessing your ideas, visions, and brand
                essence. From initial product research to wireframe creation, we
                ensure that every aspect of our design reflects your unique
                brand identity.
              </p>
            </div>
            <div className="body">
              <div className="sub-body">
                <h6>Product Design</h6>
                <p>
                  Before your product is built, we handle your idea, prototype,
                  user interface and experience design
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Graphic Design</h6>
                <p>
                  We design with your brand in mind, delivering exceptional
                  designs that are both visually stunning and functional.
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Design Outsourcing</h6>
                <p>
                  We support teams that do not have design teams in-house and
                  provide all design needs
                </p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial serve-test">
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
        <div className="serve center augument">
          <div className="serve-img center">
            <img src={ladyGuy} alt="productDesign" />
          </div>
          <div className="serve-text">
            <div className="head">
              <h1>Team Augumentation</h1>
              <p>
                Our team is committed to simplifying the process and overcoming
                obstacles to help our clients succeed in their respective
                industries.
              </p>
            </div>
            <div className="body">
              <div className="sub-body">
                <h6>Trainings</h6>
                <p>
                  We conduct trainings on marketing, design and software
                  development for startups/high-growth companies looking to
                  improve business efficiency and growth
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Development Teams</h6>
                <p>
                  We set up high quality development teams for companies based
                  on their specifications and manage thee team based on request
                </p>
                <div className="line"></div>
              </div>
              <div className="sub-body">
                <h6>Consultancy</h6>
                <p>
                  We consult for startups/high-growth companies to solve
                  problems in product engineering, marketing and team
                  augmentation
                </p>
                <div className="line"></div>
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
};

export default Service;
