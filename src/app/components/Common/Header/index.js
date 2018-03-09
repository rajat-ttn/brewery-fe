import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header>
            <img src="../images/beer_logo.png" alt="logo" className="logoStyle"/>
            <h1>The Brewery</h1>
            <img src="../images/beer_logo.png" alt="alarm" className="bellIcon"/>
        </header>
    );
}

export default Header;