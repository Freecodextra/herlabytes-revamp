import React from "react";
import "./Footer.css";
import halfLeft from "../../images/halfLeft.png";
import halfRight from "../../images/halfRight.png";
import envelop from "../../images/envelop.svg";
import location from "../../images/location.svg";
import phone from "../../images/phone.svg";
import { NavBrand } from "../navbar/navbar";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaRegCopyright  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <img
        src={halfLeft}
        alt="halfLeft"
        className="halfLeft"
      />
      <img
        src={halfRight}
        alt="halfRight"
        className="halfRight"
      />
    <div className="footer-top">
    <div className="footer-logo">
      <NavBrand />
    </div>
    <div className="footer-text">
    <div className="company">
      <h3>company</h3>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/case-studies">Case Stiudy</Link></li>
        <li><Link to="/services"> Our Services</Link></li>
      </ul>
    </div>
    <div className="company">
    <h3>company</h3>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/case-studies">Case Stiudy</Link></li>
        <li><Link to="/services"> Our Services</Link></li>
      </ul>
    </div>
    <div className="information">
    <h3>contact information</h3>
      <ul>
        <li><img src={envelop} alt="envelop" /> hello@herlabytes.com</li>
        <li><img src={phone} alt="phone" />+2349034515809</li>
        <li><img src={location} alt="location" />10 Sonola Street, Opp. Excellence Hotel Aguda, Ogba Lagos</li>
      </ul>
    </div>
    </div>
    </div>
    <div className="line"></div>
    <div className="footer-bottom">
      <div className="copyright">
        <span><FaRegCopyright /> Copyright 2023 Herlabytes Software Development Company. All Rights Reserved.</span>
      </div>
      <div className="socials center">
        <div className="center"><FaLinkedinIn /></div>
        <div className="center"><FaFacebookF /></div>
        <div className="center"><FaTwitter /></div>
        <div className="center"><FaInstagram /></div>
      </div>
    </div>
    
    </div>
  );
}

export default Footer;
