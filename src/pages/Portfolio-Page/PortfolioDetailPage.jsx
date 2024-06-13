import React from 'react'
import './PortfolioDetailPage.css'
import CtaBox from '../../components/CTA-Box/CtaBox';
import portfolio_page_background from '../../assets/portfolio_background_img.jpg'
import { Link, useLocation  } from 'react-router-dom'

const PortfolioDetailPage = () => {
    const location = useLocation();
    const {project} = location.state || {};

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.3), rgba(5, 10, 30, 0.7)), url(${portfolio_page_background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <>
            <div className="page-background-img-content">
                <div className="container about-header" style={backgroundStyle} >
                    <h1>{project.name}</h1>
                    <p><span><Link to='/'>Home</Link></span> / <Link to = '/portfolio'><span>Portfolio</span></Link> / {project.name}</p>
                </div>
            </div>
            <div className="portfolio-details-page container">
                <img src={project.imageUrl} alt="" />
                <div className="portfolio-detail-text">
                    <h2>{project.name}</h2>
                    <span className='portfolio-span'>Year : </span> <span>{project.year}</span><br /><br />
                    <span className='portfolio-span'>Category : </span> <span>{project.catagory}</span><br /><br />
                    <span className='portfolio-span'>Domain : </span> <span>{project.domain}</span><br /><br />
                    <span className='portfolio-span'>TECHNOLOGY : </span>
                    <p>{project.details_techbology}</p><br />
                    <span className='portfolio-span'>DESCRIPTION : </span>
                    <p>{project.description}</p><br />
                    <a className='btn' href={project.website_link} target='_blank'>Visit Website</a>
                </div>
            </div>
            <CtaBox />
        </>
    )
}

export default PortfolioDetailPage