import React, { useState } from 'react'
import toggler from "../../images/toggler.png";
import logo from "../../images/logo.png";
import arrow from "../../images/Arrow - Down 4.png";
import cancel from "../../images/cancel.png";
import "./navbar.css"
import { NavLink } from "react-router-dom"

function Navbar ()  {
  const [openNav, setOpenNav] = useState(false);
  const display = {
    right: "0",
    // left: "0"
  };

  function handleNavigation() {
    setOpenNav(!openNav);
  }
  return (
   <nav className='nav'>
  <div className="navigation">
  <NavBrand />
  <div className="nav__menu">
  <div className="nav__item">
    <a href="ok" className="nav__link">Menu</a>
    <div className="nav__toggler" onClick={handleNavigation}>
    <img src={toggler} alt="react logo" />
    </div>
  </div>
</div>
  </div>
<div className='side-nav' style={openNav ? display : {}}>
  <div className='left'>
    <p className='txt'>lets talk about your business</p>
    <div className='strategist'>
      <h4>Talk to our strategist</h4>
      <p>Need a solution that perfectly caters to your business requirements? <br/><br/>Simply click on the “Contact us” button and complete the contact form</p>
    </div>
    <div className='contact'>
    <button>Contact Us</button>
    <p>Want to talk now? Call us on 09034515809</p>
    </div>
  </div>
  <div className='right'>
  <p className='txt'>what would you like to know</p>

  <ul>
    <li><span><NavLink to="/case-studies" onClick={handleNavigation}>Case Study</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
    <li><span><NavLink to="/services" onClick={handleNavigation}>Our Services</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
    <li><span><NavLink to="/about" onClick={handleNavigation}>About</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
    <li><span><NavLink to="/career" onClick={handleNavigation}>Career</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
    <li><span><NavLink to="/blog" onClick={handleNavigation}>Blog</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
    <li><span><NavLink to="/contact" onClick={handleNavigation}>Contact Us</NavLink></span> <img src={arrow} className='arrow' alt='arrow'/></li>
  </ul>
  <button className='lets-talk'>Let's Talk</button>
  <div className='cancel' onClick={handleNavigation}><img src={cancel}  alt='cancel'/></div>
  </div>
 </div>
   </nav>
  )
}


export const NavBrand = () => {
  return (
    <div className='nav__brand'>
      <NavLink to="/">
   <img src={logo} alt="" /> Herlabytes
      </NavLink>
   </div>
  )
}
 
export default Navbar