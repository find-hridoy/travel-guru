import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="home-area">
            <Header />
            <Banner />
        </div>
    );
};

export default Home;