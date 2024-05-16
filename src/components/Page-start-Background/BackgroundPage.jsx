import React from 'react'
import './BackgroundPage.css';
import { Link } from 'react-router-dom'

const BackgroundPage = ({ header, page_name, imageUrl }) => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.3), rgba(5, 10, 30, 0.7)), url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <div className="container about-header" style={backgroundStyle} >
            <h1>{header}</h1>
            <p><span><Link to='/'>Home</Link></span> / {page_name}</p>
        </div>
    )
}

export default BackgroundPage
