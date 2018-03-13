import React from 'react';
import { PropTypes } from 'prop-types';
import { isSafari } from "../../../../util/helper";

// Header Component
const Header = ({ toggleSound, isMute }) => {
    const imageName = isMute ? 'alarm_white.png' : 'alarm.png';
    return (
        <header>
            <img src="/images/beer_logo.png" alt="logo" className="logoStyle"/>
            <h1>The Brewery</h1>
            {
                !isSafari()?(<span onClick={toggleSound}>
                    <img src={`/images/${imageName}`} alt="alarm" className="bellIcon"/>
                </span>):null
            }
        </header>
    );
};

export default Header;

Header.propTypes = {
    toggleSound: PropTypes.func,
    isMute: PropTypes.bool,
};