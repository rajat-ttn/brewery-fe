import React from 'react';
import './style.css';

const ProfileContainer = (props) => {
    return (
        <header>
             <img src="../images/logo.png" alt="logo" className="logoStyle"/>
            <h1>Welcome Baz to <strong>The Brewery</strong></h1>
        </header>
    );
}

export default ProfileContainer;