import React from 'react';

import './style.css';

const LoadingIndicator = ({ showLoader = false }) => {
    if (showLoader) {
        return (<div className="loader"/>);
    }
    return null;
};

export default LoadingIndicator;