import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header>
             <img src="../images/beer_logo.png" alt="logo" className="logoStyle"/>
            <h1>The Brewery</h1>
        </header>
    );
}

export default Header;