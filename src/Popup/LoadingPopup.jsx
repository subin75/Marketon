import React from 'react';
import '../scss/LoadingPopup.scss';

const LoadingPopup = () => {
    return (
    <div className="loading-overlay">
        <div className="loading-box">
            <div className="spinner"></div>
            </div>
        </div>
    );
};

export default LoadingPopup;