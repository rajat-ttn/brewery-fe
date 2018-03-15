import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import DashBoard from '../Dashboard';

const ContainerComponent = () => {
    return (
        <div className="wrapper">
            <Header />
            <DashBoard />
            <Footer />
        </div>
    );
};


export default ContainerComponent;