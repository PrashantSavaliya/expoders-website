import React, { useRef } from 'react';
import './About.css'
import { FaCheckCircle } from "react-icons/fa";
import Achievement from '../../components/Achievement/Achievement'
import ClientReview from '../../components/Client-Review/ClientReview';
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage';
import aboutPageImage from '../../assets/about_page_background_img.png';
import CtaBox from '../../components/CTA-Box/CtaBox';

const About = () => {

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
        <div>
            <div className='page-background-img-content'>
                <BackgroundPage header='About Us' page_name='About Us' imageUrl={aboutPageImage} />
                <div className="about-body">
                    <div className="container about-body-left">
                        <h1>Why Expoders Solutions?</h1>
                        <p>Expoders Solutions is a company which offers a complete bouquet of IT related services. Right from custom software development to the engineering of mobile applications, we can do it all with precision, finesse and promptness. Since our period of inception, we have had the opportunity of working with some discerning clients, from various parts of the world. All of them came to us with lofty expectations, and we ensured that they weren’t disappointed. Our emphasis was on developing such solutions that far exceeded their expectations, and in the process we earned their loyalty. Most part of the credit for this goes to our value-based work model, which emphasizes on client satisfaction, promptness and transparency.</p>
                        <p>Expoders delivers value to each of the customer scenarios; It works today, thereby, addressing all customer technology and delivery needs for desired business outcomes. Following are some of the ways in which our offerings help our customers to achieve more.</p>
                        <p>Expoders have highly skilled engineers with excellent technical knowledge and experience in using latest software standards, tools, platforms, frameworks and technologies and we invest continuously in training and education, to be able to respond to any new technology challenges and demands from our clients.</p>
                        <ul>
                            <li><FaCheckCircle className='check-mark' />Robust And Productive Business Solutions.</li>
                            <li><FaCheckCircle className='check-mark' />Our offerings help organizations to smooth global operations and achieve local compliances.</li>
                            <li><FaCheckCircle className='check-mark' />Regulatory and Industry specific compliances are made easy with our business governance solutions.</li>
                            <li><FaCheckCircle className='check-mark' />With our managed services and remote support contracts, we ensure great flexibility to your organization to focus where you need to be.</li>
                            <li><FaCheckCircle className='check-mark' />Helping your business build and grow.</li>
                        </ul>
                        <h2>Expoders Solutions provides below quality services with affordable rates.</h2>
                        <ul>
                            <li><FaCheckCircle className='check-mark' />Asp .Net Development</li>
                            <li><FaCheckCircle className='check-mark' />Php Development</li>
                            <li><FaCheckCircle className='check-mark' />Mean Stack Development</li>
                            <li><FaCheckCircle className='check-mark' />Angular Js Development</li>
                            <li><FaCheckCircle className='check-mark' />E-Commerce Web Development</li>
                        </ul>
                    </div>
                    <div className="about-body-right">
                        <h1>Vision</h1>
                        <p>With our flexible approach, understanding of domain, comfort with the latest technical tools and, continuously improved processes; we shrink every project cycle and enable accelerated delivery of World‐Class Solutions. We are committed to develop company‐wide diagnostics solutions that fulfill the needs of IT personnel in improving application performance.</p>
                        <h1>Mission</h1>
                        <p>"Delivering Value through Relationships, Fresh Talent and Technology" Expoders Solutions is a Software Service Provider company, which is providing powerful, process‐driven, high quality, cost effective solutions across industries, helping our prestigious clients in achieving evident business gains and compete successfully in an ever‐changing marketplace.</p>
                    </div>
                </div>
            </div>
            <div ref={achievementRef}>
                <Achievement scrollToAchievment={scrollToAchievment} />
            </div>
            <CtaBox />
            <ClientReview />
        </div>
    )
}

export default About
