import React from 'react';
import { PropTypes } from 'prop-types';

import './style.css';

const LoadingIndicator = ({ showLoader = false }) => {
    if (showLoader) {
        return (<div className="loader"/>);
    }
    return null;
};

export default LoadingIndicator;

LoadingIndicator.propTypes = {
    showLoader: PropTypes.bool,
};