import React from 'react'
import './Footer.css'
import expoders_logo from '../../assets/Expoders_logo2.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoEarthSharp, IoMailOutline } from "react-icons/io5";
import { FaSkype, FaPhone, FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer container'>
                <div className="footer-about-us">
                    <h1>EXPODERS SOLUTIONS</h1>
                    <p>Top leading .NET and iOS/Android mobile apps development company, Our ASP.NET experts providing high-performance, custom .NET applications of any complexity with incredible competence.</p>
                    <div className="social-link">
                        <div className="facebook">
                            <FaFacebookF />
                        </div>
                        <div className="instagram">
                            <FaInstagram />
                        </div>
                        <div className="twitter">
                            <FaTwitter />
                        </div>
                        <div className="youtube">
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className="footer-company">
                    <h1>Company</h1>
                    <ul>
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/company/about-expoders'>About Us</Link></li>
                        <li><Link to = '/services'>Service</Link></li>
                        <li><Link to = '/company/about-team'>Our Team</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link to = '/career'>Career</Link></li>
                        <li>Blog</li>
                        <li><Link to = '/contact-us'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-service">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><Link to = '/hire-developer'>Hire Dedicated developers</Link></li>
                        <li><Link to = '/hire-developer'>Hire Asp.Net Developer</Link></li>
                        <li><Link to = '/hire-developer'>Hire Php Developer</Link></li>
                        <li><Link to = '/hire-developer'>Hire Android Developer</Link></li>
                        <li><Link to = '/hire-developer'>Hire Ios Developer</Link></li>
                        <li><Link to = '/hire-developer'>Cross Platform Development</Link></li>
                        <li><Link to = '/hire-developer'>Hire Angular Js Developer</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h1>Contact</h1>
                    <ul>
                        <li><IoEarthSharp className='contact-icons' /> India, Australia</li>
                        <li><FaSkype className='contact-icons' /> dashu6101</li>
                        <li><IoMailOutline className='contact-icons' /> info@expoders.com</li>
                        <li><FaPhone className='contact-icons' /> (+91) 8460 311248</li>
                        <li><FaLocationDot className='contact-icons' /> 503, Horizon Trade Center, Vaishnovdevi circle Besides KD hospital, Sarkhej - Gandhinagar Highway, Ahmedabad, Gujarat 382481</li>
                        <li><FaLocationDot className='contact-icons' /> F/25, Ashapura complex, Detroj Road, Kadi 382715</li>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <img src={expoders_logo} alt="" />
                <p>© 2024 <span>Consen</span> all rights reserved. Design By Prashant Savavliya.</p>
            </div>
        </>
    )
}

export default Footer