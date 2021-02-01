import React from 'react';
import '../App.css';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className = 'home'>
            <h1 className = 'home-title'>Welcome to <span className='home-logo'>Projectify</span></h1>
            <p className = 'home-desc'>Get inspiration from innovative projects and show off your<br></br>
            own amazing creations!</p>
            <Link to='/projectsPage' className='start-button'>
                Get Started <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
    );
}

export default HomePage;