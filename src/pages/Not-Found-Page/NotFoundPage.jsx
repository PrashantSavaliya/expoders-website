import React from 'react'
import './NotFoundPage.css'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className='not-found'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button className='btn' onClick={handleGoBack}>Go to previous page</button>
        </div>
    )
}

export default NotFoundPage
