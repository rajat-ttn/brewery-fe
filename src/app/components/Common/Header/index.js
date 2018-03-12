import React from 'react';
import './style.css';

const Header = ({ toggleSound, isMute }) => {
    const imageName = isMute ? 'alarm-mute.png' : 'alarm.png';
    return (
        <header>
            <img src="../images/beer_logo.png" alt="logo" className="logoStyle"/>
            <h1>The Brewery</h1>
            <span onClick={toggleSound}>
            <img src={`../images/${imageName}`} alt="alarm" className="bellIcon"/>
            </span>
        </header>
    );
}

export default Header;