import React from 'react'
import './Footer.css'
import expoders_logo from '../../assets/Expoders_logo2.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoEarthSharp, IoMailOutline } from "react-icons/io5";
import { FaSkype, FaPhone, FaLocationDot } from "react-icons/fa6";
import { Link , useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path || (path !== '/' && location.pathname.startsWith(path)) ? 'active' : '';
      };
    return (
        <div className='footer-top'>
            <div className='footer container'>
                <div className="footer-about-us">
                    <h1>EXPODERS SOLUTIONS</h1>
                    <p>Top leading .NET and iOS/Android mobile apps development company, Our ASP.NET experts providing high-performance, custom .NET applications of any complexity with incredible competence.</p>
                    <div className="social-link">
                        <div className="facebook">
                            <a href="https://www.facebook.com/expoders/" target='_blank'><FaFacebookF /></a>
                        </div>
                        <div className="instagram">
                            <a href="https://www.instagram.com/expoders_/" target='_blank'><FaInstagram /></a>
                        </div>
                        <div className="linked-in">
                            <a href="https://www.linkedin.com/company/expoders-solutions/mycompany/" target='_blank'><FaLinkedinIn /></a>
                        </div>
                        {/* <div className="twitter">
                            <FaTwitter />
                        </div>
                        <div className="youtube">
                            <FaYoutube />
                        </div> */}
                    </div>
                </div>
                <div className="footer-company">
                    <h1>Company</h1>
                    <ul>
                        <li className={isActive('/')}><Link to = '/'>Home</Link></li>
                        <li className={isActive('/company/about-expoders')}><Link to = '/company/about-expoders'>About Us</Link></li>
                        <li className={isActive('/services')}><Link to = '/services'>Service</Link></li>
                        <li className={isActive('/company/about-team')}><Link to = '/company/about-team'>Our Team</Link></li>
                        <li className={isActive('/portfolio')}><Link to = '/portfolio'>Portfolio</Link></li>
                        <li className={isActive('/career')}><Link to = '/career'>Career</Link></li>
                        <li className={isActive('/blog')}><Link to = '/blog'>Blog</Link></li>
                        <li className={isActive('/contact-us')}><Link to = '/contact-us'>Contact Us</Link></li>
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
                        <li><a href="mailto:info@expoders.com"><IoMailOutline className='contact-icons' /> info@expoders.com</a></li>
                        <li><a href="tel:+918460311248"><FaPhone className='contact-icons' /> (+91) 8460 311248</a></li>
                        <li><a href="https://maps.app.goo.gl/rqyeCDuLJsvG3FZX9" target='_blank'><FaLocationDot className='contact-icons' /> 503, Horizon Trade Center, Vaishnovdevi circle Besides KD hospital, Sarkhej - Gandhinagar Highway, Ahmedabad, Gujarat 382481</a></li>
                        <li><a href="https://maps.app.goo.gl/W5Waj47T3pYuQiMw6" target='_blacnk'><FaLocationDot className='contact-icons' /> F/25, Ashapura complex, Detroj Road, Kadi 382715</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <img src={expoders_logo} alt="" />
                <p>© 2024 <span>Consen</span> all rights reserved. Design By Prashant Savavliya.</p>
            </div>
        </div>
    )
}

export default Footer