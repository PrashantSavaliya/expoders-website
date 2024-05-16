import React from 'react'
import './CtaBox.css'
import { Link } from 'react-router-dom'
import ctaBox_background_img from '../../assets/ctaBox_background_img.jpeg'

const CtaBox = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.3), rgba(5, 10, 30, 0.7)), url(${ctaBox_background_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <div className="container ctaBox" style={backgroundStyle} >
            <h1>Have something in mind?</h1>
            <div>
                <button className='btn free-quote'><Link to = '/hire-developer'>Get a Free Quote</Link></button>
                <button className='btn'><Link to = '/hire-developer'>Hire Dedicated Developers</Link></button>
            </div>
        </div>
    )
}

export default CtaBox