import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header>
             <img src="../images/logo.png" alt="logo" className="logoStyle"/>
            <h1>Welcome to Baz Brewery</h1>
            <div className="colorInfo">
                <div><span className="status-circle low-temp"></span>Current Temperature is Below Temperature Range</div>
                <div><span className="status-circle high-temp"></span>Current Temperature is  Above Temperature Range</div>
            </div>
        </header>
    );
}

export default Header;