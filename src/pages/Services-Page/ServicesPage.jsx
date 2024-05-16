import React from 'react'
import './ServicesPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { IoSettingsOutline } from "react-icons/io5";
import CtaBox from '../../components/CTA-Box/CtaBox';

const ServicesPage = () => {
    return (
        <>
            <Navbar />
            <div className="srevice-page-background">
                <h1>The best <span>Solution</span> <br />for Your business</h1>
                <p>Leading Offshore Web and Mobile Development Solutions Provider!</p>
                <p>Enhance Your Efficiency and Augment Your Work Force by Hiring the Expert dedicated developer.</p>
            </div>
            <div className="container">
                {/* ---------- Web Development ---------- */}
                <div className="web-development">
                    <h1>Web Development</h1>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> ASP .NET DEVELOPMENT</h2>
                            <p>Expoders Solutions provides Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), Custom Application Development (Web and Windows based) using Microsoft .Net Framework.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> PHP DEVELOPMENT</h2>
                            <p>We provide wide range of Custom PHP Software Development for both new and existing dynamic websites, eCommerce sites, Community Sites and Portals by using PHP, Apache and MySQL.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> MEAN STACK DEVELOPMENT</h2>
                            <p>Our expert Mean Stack developers help you develop web apps that attracts your users and keep them engaged. This improves the complete experience of your visitors.</p>
                        </div>
                    </section>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> ANGULAR JS DEVELOPMENT</h2>
                            <p>We develop AngularJS apps that run smoothly on any browser. We don’t believe in mind reading, we believe in communicating and hence, we discuss everything that you want in your apps.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> REACT NATIVE FOR WEB DEVELOPMENT</h2>
                            <p>React Native Web is an awesome web development library available for frontend developers. The beauty of React Native Web is that it can be used to run an application on any platform just using a single codebase.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> E-COMMERCE WEB DEVELOPMENT</h2>
                            <p>Expoders Solutions is the top eCommerce website development outsourcing company located in India. We provide total eCommerce solutions using Microsoft ASP.Net MVC and SQL Server.</p>
                        </div>
                    </section>
                </div>

                {/* ---------- Mobile App Development ---------- */}
                <div className="web-development">
                    <h1>Mobile App Development</h1>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> IPHONE APPLICATION DEVELOPMENT</h2>
                            <p>In the world of Information Technology the iPhone is the most perspective next-generation Mobile Application Platform in the today's market. The process of designing an iPhone Application.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> ANDROID APPLICATION DEVELOPMENT</h2>
                            <p>Android Application Development offers support of JAVA for developers. So that Developers can build third party applications based on Java which is can run on Android Platform.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> REACT NATIVE APP DEVELOPMENT</h2>
                            <p>React Native app development has been accelerated by this framework that has a client side library & can be thought of as an upgrade to the React – which was a Javascript library developed by Facebook.</p>
                        </div>
                    </section>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> CROSS PLATFORM APP DEVELOPMENT</h2>
                            <p>We spend a time to deeply understand your requirement, and use agile development methodology to create apps that meet the needs of your business, industry, and users.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> FLUTTER APP DEVELOPMENT</h2>
                            <p>Flutter app development helps businesses create native-like apps on a smaller budget and launch them on both Android and iOS operating systems simultaneously</p>
                        </div>
                    </section>
                </div>

                {/* ---------- DESIGN & CMS ---------- */}
                <div className="web-development">
                    <h1>DESIGN & CMS</h1>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> WEB DESIGN</h2>
                            <p>Our website designing service is to help our clients carve out a distinguished identity. We employ innovation in our work structure and use our experience to develop such web experiences.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> MOBILE APP DESIGN</h2>
                            <p>We have an expert team of UI/UX Designers who take care of every element while creating design. After we create sketches and then we present final piece of Designs with client to take their comments.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> HTML5 DEVELOPMENT</h2>
                            <p>We present to you complete and well-round service of web development in HTML. We have detailed knowledge of the language, and also integrate your HTML based websites and applications with CSS.</p>
                        </div>
                    </section>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> CONTENT MANAGEMENT SYSTEMS</h2>
                            <p>A good CMS solution will provide information about your site’s performance including traffic and customer workflow. This makes a CMS an especially helpful and powerful tool for ecommerce businesses.</p>
                        </div>
                    </section>
                </div>

                {/* ---------- OTHERS IT Service ---------- */}
                <div className="web-development">
                    <h1>OTHERS IT Service</h1>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> DIGITAL MARKETING & SEO</h2>
                            <p>We develop a strategic plan for your website and focus on improving your ranking for relevant keywords, which yields valuable conversions. The implementation work starts with the proper fundamentals are in place.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> DATABASE SERVER MIGRATION</h2>
                            <p>Database Migrations are particularly complicated as you have all the challenges of changing your software platform, where some old features are missing, or behave differently.</p>
                        </div>
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> TECHNOLOGY MIGRATION</h2>
                            <p>We provide migration services with a distinct re-engineering process. To ensure scalability of products, we assist organizations in migrating their legacy application to high-performance, easy-to-use.</p>
                        </div>
                    </section>
                    <section className="up-container">
                        <div className="item">
                            <h2><IoSettingsOutline className='service-icon' /> WEB HOSTING & MAINTENANCE</h2>
                            <p>We provides website maintenance is a proactive service that includes meetings to assess the state of your site and ensure that your online activities remain on track with your overall business goals.</p>
                        </div>
                    </section>
                </div>
            </div>
            <CtaBox />
            <Footer />
        </>
    )
}

export default ServicesPage
