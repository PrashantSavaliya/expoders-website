import React, { useState } from 'react'
import './PortfolioPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage'
import portfolio_page_background from '../../assets/portfolio_background_img.jpg'
import Achievement from '../../components/Achievement/Achievement'
import ClientReview from '../../components/Client-Review/ClientReview'
import { Link } from 'react-router-dom'
import projects from '../../data/PortfolioData.js'

const PortfolioPage = () => {

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