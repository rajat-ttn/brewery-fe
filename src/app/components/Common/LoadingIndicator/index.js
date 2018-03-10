import React from 'react';
import './style.css';
const LoadingIndicator = ({ showLoader = false }) => {
    if(showLoader) {
        return (
            <div className="main-container">
                <div className="se-pre-con">

                </div>
            </div>
        );
    }
    return null;
};

export default LoadingIndicator;