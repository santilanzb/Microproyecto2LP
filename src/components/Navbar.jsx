import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            {(location.pathname === '/login' || location.pathname === '/register') && (
                <>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Log In</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;