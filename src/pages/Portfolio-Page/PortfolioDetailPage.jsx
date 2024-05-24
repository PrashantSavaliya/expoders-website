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
                    <h3><span>Year : </span>{project.year}</h3>
                    <h3><span>CATEGORY : </span>{project.catagory}</h3>
                    <h3><span>DOMAIN : </span>{project.domain}</h3>
                    <h4>TECHNOLOGY : </h4>
                    <p>{project.details_techbology}</p>
                    <h4>DESCRIPTION : </h4>
                    <p>{project.description}</p>
                    <button className='btn'>Visit Website</button>
                </div>
            </div>
            <CtaBox />
        </>
    )
}

export default PortfolioDetailPage