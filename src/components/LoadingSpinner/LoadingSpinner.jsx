import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
            </div>
        </div>
    )
}

export default LoadingSpinner
