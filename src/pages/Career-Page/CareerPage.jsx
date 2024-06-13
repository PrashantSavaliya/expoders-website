import React, { useRef } from 'react';
import './CareerPage.css'
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage';
import Achievement from '../../components/Achievement/Achievement'
import ClientReview from '../../components/Client-Review/ClientReview'
import careerImg from '../../assets/career_img_background.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const CareerPage = () => {
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
                <BackgroundPage header='CAREER' page_name='Carrer' imageUrl={careerImg} />
            </div>
            <div className='container'>
                <Accordion>
                    <AccordionSummary className='accordian-header' >
                        Current Openings
                    </AccordionSummary>
                </Accordion>
                <Accordion className='middle-accordian'>
                    <AccordionSummary className='accordian-title1' >
                        Asp.Net MVC Developers (0.6-2 Years) 2 Positions.
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1' >
                        <ul>
                            Required Skills :-
                            <li>- ASP .NET, C# .NET, MVC4 , MVC5 , MVC 6 , MSSQL 2012, MSSQL 2016 ,HTML5, CSS3, JQuery, Javascripts.</li>
                            <li>- In depth knowledge of .NET Framework 4.5 and above.</li>
                            <li>- Have minimum 2 years of practical experience in MVC 4.0 and above version Mandatory.</li>
                            <li>- Good communication, analytical and presentation skills, problem solving skills and learning attitude.</li>
                            <li>- Good communication skills and ability to work with global teams to define and deliver on projects.</li>
                            <li>- Experience in all phases of project life cycle Analysis, Design, Coding, Testing, deployment.</li>
                            <li>- Strong understanding of .NET client/server, .NET web and object oriented analysis & design.</li>
                        </ul>
                        <p>Send Your Resume to <span><a href="mailto:info@expoders.com">info@expoders.com</a></span></p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary className='accordian-title2' >
                        Front End Developer / Angular Developer – (0.6-2 Years) 2 Positions.
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail2'>
                        <ul>
                            Required Skills :-
                            <li>- Experience of angular 2+ versions web applications development.</li>
                            <li>- Must have knowledge of JavaScript, TypeScript and JQuery.</li>
                            <li>- Able to work in a team and independently.</li>
                            <li>- Excellent communication skills to be able to communicate with client directly.</li>
                            <li>- Must knowledge of how to add npm package and their dependency in angular.</li>
                            <li>- Have ability to deploy web applications for staging usage.</li>
                            <li>- Develop User interfaces for Modern Rich Internet Applications with the latest Front End Technologies.</li>
                        </ul>
                        <p>Send Your Resume to <span><a href="mailto:info@expoders.com">info@expoders.com</a></span></p>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div ref={achievementRef}>
                <Achievement scrollToAchievment={scrollToAchievment} />
            </div>
            <ClientReview />
        </>
    )
}

export default CareerPage