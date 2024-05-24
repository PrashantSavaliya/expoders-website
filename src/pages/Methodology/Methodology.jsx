import React, { useRef } from 'react';
import './Methodology.css'
import { FaCheckCircle } from "react-icons/fa";
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage';
import methodologyImg from '../../assets/methodology_img_background.jpg'
import Achievement from '../../components/Achievement/Achievement.jsx'
import ClientReview from '../../components/Client-Review/ClientReview.jsx'
import methodology_img from '../../assets/Methodology_img_chart.jpg'
import CtaBox from '../../components/CTA-Box/CtaBox.jsx';

const Methodology = () => {

    const achievementRef = useRef(null);

    const scrollToAchievment = () => {
        const offset = -400
        if (achievementRef.current) {
            const topPos = achievementRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPos, behavior: 'smooth', });
            console.log(window.scrollY);
        }
    };
    return (
        <>
            <div className="page-background-img-content">
                <BackgroundPage header='METHODOLOGY' page_name='Methodology' imageUrl={methodologyImg} />
            </div>
            <div className="container methodology">
                <h1>Expoders Process Development</h1>
                <p>At Expoders Solutions, we are using highly mature software development cycles to provide you high-quality output on time. We are using basecamp, Agilefant, Pivotal Tracker, Mantis such kind of tool to manage projects. We are using Agile Methodology for project development with well-experienced scrum masters. Expoders Solutions have been focusing on the systematical work that shortens the distances and optimizes the coordination and the efforts, between the team members. In addition to a system, we provide.Normalization of the produced code, use of standards and names that help to do the simplest programming and with less errors are allowed for the team to work, or review the code in a future. At Expoders Solutions we are employed with a very few strict and elaborate procedures, based on the experience of others and of ours for the production of the code and for the tests and treatment.</p>
            </div>
            <div className="container methodology-progress">
                <h2>Our Progress</h2>
                <div className="progress">
                    <img src={methodology_img} alt="" />
                    <div>
                        <ul>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Plan - </span> The test planning stage represents the need to review long–lead-time test planning activities.</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Define - </span>Success begins at project definition. Working closely with our clients, Cogent places careful emphasis on properly defining the project requirements and scope.</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Design - </span>where we choose the technology, create diagrams, and plan software architecture</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Contruct - </span>where we figure out how to solve problems and write code</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Testing - </span>where we make sure the code does what it supposed to do without breaking anything</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Deploy - </span>where we deploy the code to production environment and provide support</p>
                            </li>
                            <li>
                                <p><FaCheckCircle className='check-mark' /><span>Support - </span>In this phase, systems are in place and operating, enhancements and/or modifications to the system are developed and tested, and hardware and/or software is added or replaced.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={achievementRef}>
                <Achievement scrollToAchievment={scrollToAchievment} />
            </div>
            <CtaBox />
            <ClientReview />
        </>
    )
}

export default Methodology
