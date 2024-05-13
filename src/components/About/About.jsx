import React from 'react'
import './About.css'
import about_img from '../../assets/about_expoders_img.png'
import { FaPlusCircle  } from "react-icons/fa";

const About = () => {
    return (
        <div className='container about'>
            <div className="abour-left">
                <h1>What Say Our <span>CEO</span>, About Consen <span>Customers</span></h1>
                <div>“We help Our Clients to Renew Their Business Function to Create Brandable Organizations”</div>
                <p>Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional markets through multidisciplinary services. Uniquely strategize transparent technology and user friendly ideas markets.</p>
                <div> <span>----</span> Philip Antrophy</div>
                <p>SEO & Founder</p>
                <button className='btn'>Clients Review  <FaPlusCircle className='plus-icon' /></button>
            </div>
            <div className="about-right">
                <img src={about_img} alt="" />
            </div>
        </div>
    )
}

export default About