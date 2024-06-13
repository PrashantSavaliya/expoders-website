import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { FaDesktop, FaCheckCircle } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";

const Services = () => {
    return (
        <div className="service">
            <h2>Services</h2>
            <div>
                <p> Leading Offshore Web and Mobile Development Solutions Provider! Enhance Your Efficiency  and Augment Your Work Force by Hiring the Expert dedicated developer </p>
                <Link to="/services"><button className="btn"> All Services </button></Link>
            </div>
            <section>
                <div>
                    <div className="service-item">
                        <ul>
                            <h4> <FaDesktop className="serviceIcon" /> <span> Web Development</span> </h4>
                            <li> <FaCheckCircle className="check-mark" /> Asp .Net Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Php Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Mean Stack Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Angular Js Development </li>
                            <li> <FaCheckCircle className="check-mark" /> React native for Web Development </li>
                            <li> <FaCheckCircle className="check-mark" /> E-Commerce Web  Development </li>
                        </ul>
                    </div>
                    <div className="service-item">
                        <ul>
                            <h4> <MdOutlinePhoneAndroid className="serviceIcon" /> <span> Mobile App Development</span> </h4>
                            <li> <FaCheckCircle className="check-mark" /> iPhone Application Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Android Application Development </li>
                            <li> <FaCheckCircle className="check-mark" /> React Native App Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Flutter App Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Cross Platform App Development </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="service-item">
                        <ul>
                            <h4> <LuTarget className="serviceIcon" /> <span>DESIGN & CMS</span> </h4>
                            <li> <FaCheckCircle className="check-mark" /> Web Design </li>
                            <li> <FaCheckCircle className="check-mark" /> Mobile App Design </li>
                            <li> <FaCheckCircle className="check-mark" /> HTML5 Development </li>
                            <li> <FaCheckCircle className="check-mark" /> Content Management Systems </li>
                        </ul>
                    </div>
                    <div className="service-item">
                        <ul>
                            <h4> <IoSettingsOutline className="serviceIcon" /> <span> Others IT Service</span> </h4>
                            <li> <FaCheckCircle className="check-mark" /> Digital marketing & SEO </li>
                            <li> <FaCheckCircle className="check-mark" /> Database Server Migration </li>
                            <li> <FaCheckCircle className="check-mark" /> Technology Migration </li>
                            <li> <FaCheckCircle className="check-mark" /> Web Hosting & maintenance </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;