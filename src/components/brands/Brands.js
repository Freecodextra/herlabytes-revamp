import React from 'react'
import "./brands.css"
import logo1 from "../../images/bleyt.png"
import logo2 from "../../images/aella.png"
import logo3 from "../../images/inlarks.png"
import logo4 from "../../images/providus.png"

function Brands() {
  return (
    <div className='brands'>
        <p>Trusted by Africa's Biggest Brands</p>
        <div className='brand-logos'>
            <div className='first'>
            <img src={logo3} alt='inlarks'></img>
            <img src={logo1} alt='bleyt'></img>
            </div>
            <div className='second'>
            <img src={logo2} alt='aella'></img>
            <img src={logo4} alt='providus' className='big'></img>
            </div>
        </div>
    </div>
  )
}

export default Brands