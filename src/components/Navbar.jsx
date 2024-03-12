import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLandingPage }) {
    return (
        <nav className="navbar">
            {!isLandingPage && (
                <>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Log In</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;