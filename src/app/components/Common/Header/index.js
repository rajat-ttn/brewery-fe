import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header>
             <img src="../images/logo.png" alt="logo" className="logoStyle"/>
            <h1>Welcome to Baz Brewery</h1>
            <div className="colorInfo">
                <div><span className="status-circle blueBackground"></span><small>Current Temperature is <strong>below</strong> the temperature range</small></div>
                <div><span className="status-circle redBackground"></span><small>Current Temperature is  <strong>above</strong> the temperature range</small></div>
            </div>
        </header>
    );
}

export default Header;