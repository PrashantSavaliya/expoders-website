import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css'
import { CgWebsite } from "react-icons/cg";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOtherHouses } from "react-icons/md";

const Services = () => {
    return (
        <div className='service'>
            <div className="service-details">
                <div>We Run All Kinds Of Services From <span>Technologies</span></div>
                <a><Link to = '/services'><button className='btn'>All Service </button></Link></a>
            </div>
            <div className="service-items">
                <div className="items">
                    <span>01</span>
                    <div className='items-logo'><CgWebsite className='text'/></div>
                    <h2>WEB DEVELOPMENT</h2>
                    <p>Dramatically cultivate from quality user centric growth strateges emerging</p>
                    <Link to = '/services'><button className='btn'>Read More</button></Link>
                </div>
                <div className="items">
                    <span>02</span>
                    <div className='items-logo'><FaMobileScreenButton className='text' /></div>
                    <h2>MOBILE APP DEVELOPMENT</h2>
                    <p>Dramatically cultivate from quality user centric growth strateges emerging</p>
                    <Link to = '/services'><button className='btn'>Read More</button></Link>
                </div>
                <div className="items">
                    <span>03</span>
                    <div className='items-logo'><SiMaterialdesignicons className='text' /></div>
                    <h2>DESIGN AND CMS</h2>
                    <p>Dramatically cultivate from quality user centric growth strateges emerging</p>
                    <Link to = '/services'><button className='btn'>Read More</button></Link>
                </div>
                <div className="items">
                    <span>04</span>
                    <div className='items-logo'><MdOtherHouses className='text' /></div>
                    <h2>OTHERS IT SERVICES</h2>
                    <p>Dramatically cultivate from quality user centric growth strateges emerging</p>
                    <Link to = '/services'><button className='btn'>Read More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Services