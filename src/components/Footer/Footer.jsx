import React from 'react'
import './Footer.css'
import post_1 from '../../assets/post_1.jpg'
import post_2 from '../../assets/post_2.jpg'
import expoders_logo from '../../assets/Expoders_logo2.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer container'>
                <div className="footer-about-us">
                    <h1>About Us</h1>
                    <p>Busines Consulting is optimize standing manufactured products and installation synergy. Professionally predominat why professional business</p>
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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Service</li>
                        <li>Our Team</li>
                    </ul>
                </div>
                <div className="footer-service">
                    <h1>Service</h1>
                    <ul>
                        <li>Strategy & Planing</li>
                        <li>Consumer Market</li>
                        <li>Data Analysis</li>
                        <li>Corporate Finance</li>
                        <li>Market Research</li>
                    </ul>
                </div>
                <div className="footer-posts">
                    <h1>Popular Posts</h1>
                    <div className="posts">
                        <div className="post">
                            <img src={post_1} alt="" />
                        </div>
                        <div className="post-desc">
                            <h2>How To Plugin Install WP server?</h2>
                            <p>Dec 2, 2023</p>
                        </div>
                    </div>
                    <div className="posts">
                        <div className="post">
                            <img src={post_2} alt="" />
                        </div>
                        <div className="post-desc">
                            <h2>Top 10 Most Usefull Google Extansion</h2>
                            <p>Dec 15, 2023</p>
                        </div>
                    </div>
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