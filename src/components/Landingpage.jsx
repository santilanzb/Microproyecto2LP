import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css'; // Import the CSS file for styling

function LandingPage({ setIsLandingPage }) { // Add setIsLandingPage as a prop
    // Set isLandingPage to true when the component is mounted
    useEffect(() => {
        setIsLandingPage(true);
    }, []);

    return (
        <div className="landing-container">
            <h1>Welcome to our site!</h1>
            <Link to="/register" className="landing-button" onClick={() => setIsLandingPage(false)}>Register</Link>
            <Link to="/login" className="landing-button" onClick={() => setIsLandingPage(false)}>Log In</Link>
        </div>
    );
}

export default LandingPage;