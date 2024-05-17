import React, { useState } from 'react'
import './PortfolioPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage'
import portfolio_page_background from '../../assets/portfolio_background_img.jpg'
import Achievement from '../../components/Achievement/Achievement'
import ClientReview from '../../components/Client-Review/ClientReview'
import teleafya from '../../assets/portfolio_imges/teleafya.png'
import chit_chat_channel from '../../assets/portfolio_imges/chit_chat_channel.png'
import dispatchafya from '../../assets/portfolio_imges/dispatchafya.png'
import secure_z from '../../assets/portfolio_imges/secure_z.png'
import aquasain from '../../assets/portfolio_imges/aquasain.png'
import streamrights from '../../assets/portfolio_imges/streamrights.png'
import smart_nation from '../../assets/portfolio_imges/smart_nation.png'
import papa_negra from '../../assets/portfolio_imges/papa_negra.png'
import ianini_gelati from '../../assets/portfolio_imges/ianini_gelati.png'
import restaurante_cataria from '../../assets/portfolio_imges/restaurante_cataria.png'
import patel_seeds from '../../assets/portfolio_imges/patel_seeds.png'
import gecko from '../../assets/portfolio_imges/gecko.png'
import twatwa from '../../assets/portfolio_imges/twatwa.png'
import progrecity from '../../assets/portfolio_imges/progrecity.png'
import shippingtogo from '../../assets/portfolio_imges/shippingtogo.png'
import telescope_task from '../../assets/portfolio_imges/telescope_task.png'
import gotstaged_web from '../../assets/portfolio_imges/gotstaged_web.png'
import signmee_meesys from '../../assets/portfolio_imges/signmee_meesys.png'
import covidsuspect from '../../assets/portfolio_imges/covidsuspect.png'
import helium_cloud from '../../assets/portfolio_imges/helium_cloud.png'
import jewel_strong from '../../assets/portfolio_imges/jewel_strong.png'
import health_web_guru from '../../assets/portfolio_imges/health_web_guru.png'
import { Link } from 'react-router-dom'

const PortfolioPage = () => {

    const projects =
        [
            {
                id: 1,
                name: "TELEAFYA",
                technology: "ASP.NET | .NET Core",
                imageUrl: teleafya,
                year: 2017,
                catagory: 'Web Application Development',
                domain: 'Health Care',
                details_techbology: 'ASP.NET | .NET Core | WEB API | SQL Server',
                description: 'TeleAfya is platform enables health care provider to register and highlights their knowledge and experience in patients where patient can book their appointments, diagnosis test and ambulance as well and track record of their health profile.'
            },
            {
                id: 2,
                name: "CHIT-CHAT-CHANNEL",
                technology: "ASP.NET MVC",
                imageUrl: chit_chat_channel,
                year: 2016,
                catagory: 'Web Application Development',
                domain: 'Social Network',
                details_techbology: ' ASP.NET MVC | WEB API | SQL Server',
                description: 'ChitChatChannem is social network platform where presenter can create their channel and post daily updates where participant can join and view those channels and get daily updates.'
            },
            {
                id: 3,
                name: "DISPATCHAFYA",
                technology: "ASP.NET | .NET Core",
                imageUrl: dispatchafya,
                year: 2018,
                catagory: ' Web Application Development',
                domain: 'Health Care',
                details_techbology: 'ASP.NET Core MVC | API | SQL Server',
                description: 'DispatchAfya is platform to create and health care events in town and patients can book and join those events and request profesional volunteers.'
            },
            {
                id: 4,
                name: "SECURE-Z",
                technology: "ASP.NET",
                imageUrl: secure_z,
                year: 2015,
                catagory: 'Web Application Development',
                domain: 'Business and Security',
                details_techbology: 'ASP.NET | SQL Server | Android',
                description: 'Secure-z is online platform for business houses to manage their products sell or buy and maintain balance sheet at one place.'
            },
            {
                id: 5,
                name: "AQUASIAN",
                technology: "PHP | Wordpress",
                imageUrl: aquasain,
                year: 2016,
                catagory: 'Web Application Development',
                domain: 'Industry',
                details_techbology: 'PHP | WordPress | MySQL',
                description: 'The water softener Aquasain is an effective system that eliminates the formation of lime without the need for salt.'
            },
            {
                id: 6,
                name: "STREAMRIGHTS",
                technology: "PHP | Laravel",
                imageUrl: streamrights,
                year: 2016,
                catagory: 'Web Application Development',
                domain: 'Social Network',
                details_techbology: 'PHP | Laravel | MySQL',
                description: 'StreamRights is platform for celebrities to build their profile and manage all their social networks and fan at one place.'
            },
            {
                id: 7,
                name: "SMART NATION",
                technology: "HTML5 | Responsive",
                imageUrl: smart_nation,
                year: 2021,
                catagory: 'Digital Transformation',
                domain: '--*--',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 8,
                name: "PAPA NEGRA",
                technology: "HTML5 | Responsive",
                imageUrl: papa_negra,
                year: 2017,
                catagory: 'DESIGN & CMS',
                domain: 'Hotels and Restaurants',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 9,
                name: "IANINI GELATI",
                technology: "HTML5 | Responsive",
                imageUrl: ianini_gelati,
                year: 2018,
                catagory: 'DESIGN & CMS',
                domain: 'Hotels and Restaurants',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 10,
                name: "RESTAURANTE CATARIA",
                technology: "HTML5 | Responsive",
                imageUrl: restaurante_cataria,
                year: 2018,
                catagory: 'DESIGN & CMS',
                domain: 'Hotels and Restaurants',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 11,
                name: "PATEL SEEDS",
                technology: "HTML5 | Responsive",
                imageUrl: patel_seeds,
                year: 2018,
                catagory: 'DESIGN & CMS',
                domain: 'Restaurant and Food',
                details_techbology: 'PHP | HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 12,
                name: "GECKO",
                technology: "HTML5 | Responsive",
                imageUrl: gecko,
                year: 2018,
                catagory: 'DESIGN & CMS',
                domain: 'Restaurant and Food',
                details_techbology: 'PHP | HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 13,
                name: "TWATWA",
                technology: "Angular | HTML5 | Responsive",
                imageUrl: twatwa,
                year: 2019,
                catagory: 'DESIGN & CMS',
                domain: 'Video Streaming',
                details_techbology: 'Angular | HTML5 | CSS3 | Bootstrap | jQuery',
                description: 'TwaTwa is an online video streaming platform and an outlet of user generated video content that allows undiscovered Talent creators and video content creators to upload and share videos'
            },
            {
                id: 14,
                name: "PROGRECITY",
                technology: "Angular",
                imageUrl: progrecity,
                year: 2022,
                catagory: 'Ecommerce',
                domain: 'Ecommerce',
                details_techbology: 'Angular | HTML5 | CSS3 | Bootstrap | jQuery | Node.js',
                description: ''
            },
            {
                id: 15,
                name: "SHIPPINGTOGO",
                technology: "Angular",
                imageUrl: shippingtogo,
                year: 2021,
                catagory: 'Ecommerce',
                domain: 'Ecommerce',
                details_techbology: 'Angular | HTML5 | CSS3 | Bootstrap | jQuery',
                description: 'ShippingToGo makes shipping easy and affordable. When you ship with us, you’ll be able to choose from any of the service options our many partner carriers offer.'
            },
            {
                id: 16,
                name: "TELESCOPE TASK",
                technology: "Angular",
                imageUrl: telescope_task,
                year: 2021,
                catagory: 'Task Management System',
                domain: 'Task Management System',
                details_techbology: 'Angular | HTML5 | CSS3 | Bootstrap | jQuery',
                description: 'Telescope is a simple task management software for small businesses and freelancers.'
            },
            {
                id: 17,
                name: "GOTSTAGED WEB",
                technology: "React",
                imageUrl: gotstaged_web,
                year: 2022,
                catagory: 'Video Streaming',
                domain: 'Video Streaming',
                details_techbology: 'React | HTML5 | CSS3 | Bootstrap | jQuery',
                description: 'Gotstaged is an online video streaming platform and an outlet of user generated video content that allows undiscovered Talent creators and video content creators to upload and share videos.'
            },
            {
                id: 18,
                name: "SIGNMEE MEESYS",
                technology: "ASP.NET | .NET Core",
                imageUrl: signmee_meesys,
                year: 2022,
                catagory: 'School Management System',
                domain: 'School Management System',
                details_techbology: 'ASP.NET MVC | SQL Server',
                description: 'Signmee helps schools and businesses to make the move to digital forms. Signmee makes it easy to create, send, receive and store forms, attachments and payments'
            },
            {
                id: 19,
                name: "COVID SUSPECT",
                technology: "HTML5 | Responsive",
                imageUrl: covidsuspect,
                year: 2021,
                catagory: 'Healthcare',
                domain: 'Healthcare',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 20,
                name: "HELIUM CLOUD",
                technology: "ASP.NET | .NET Core",
                imageUrl: helium_cloud,
                year: 2021,
                catagory: 'Healthcare',
                domain: 'Healthcare',
                details_techbology: 'ASP.NET | .NET Core',
                description: 'HeliumCloud continues to innovate and pioneer new software platforms that power everyday life, making the world we live in a little better each day.'
            },
            {
                id: 21,
                name: "JEWEL STRONG",
                technology: "HTML5 | Responsive",
                imageUrl: jewel_strong,
                year: 2021,
                catagory: 'Healthcare',
                domain: 'Healthcare',
                details_techbology: 'HTML5 | CSS3 | Bootstrap | jQuery',
                description: '--*--'
            },
            {
                id: 22,
                name: "HEALTH WEB GURU",
                technology: "Flutter | Node.js | Angular",
                imageUrl: health_web_guru,
                year: 2022,
                catagory: 'Healthcare',
                domain: 'Healthcare',
                details_techbology: 'Flutter| Node.js | Angular',
                description: 'The Health Web Guru app is here. Sometimes you need to make an effort to make positive changes in your life and lead a healthy lifestyle.'
            }
        ];
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.technology.includes(filter));

    return (
        <>
            <Navbar />
            <div className="page-background-img-content">
                <BackgroundPage header='PORTFOLIO' page_name='Portfolio' imageUrl={portfolio_page_background} />
            </div>
            <div className="container portfolio-page">
                <ul>
                    <li onClick={() => handleFilterChange('All')} >All</li> <span> | </span>
                    <li onClick={() => handleFilterChange('ASP.NET')} >ASP.NET</li> <span> | </span>
                    <li onClick={() => handleFilterChange('PHP')} >PHP</li> <span> | </span>
                    <li onClick={() => handleFilterChange('Flutter')} >Mobile</li> <span> | </span>
                    <li onClick={() => handleFilterChange('Angular')} >Angular</li> <span> | </span>
                    <li onClick={() => handleFilterChange('React')} >React</li> <span> | </span>
                    <li onClick={() => handleFilterChange('HTML5 | Responsive')} >HTML5/Responsive</li>
                </ul>
                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="portfolio-item">
                            <Link to={`/portfolio/${project.name}`} state={{ project }}>
                                <div className="portfolio-image">
                                    <img src={project.imageUrl} alt={project.name} />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-text">
                                            <h3>{project.name}</h3>
                                            <p>{project.technology}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
            <Achievement />
            <ClientReview />
            <Footer />
        </>
    )
}

export default PortfolioPage