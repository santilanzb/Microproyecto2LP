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
            {(location.pathname === '/Homepage' || location.pathname === '/Search') && (
                <>
                    <Link to="/Homepage" className="nav-link">Home</Link>
                    <Link to="/Search" className="nav-link">Videogames</Link> {/* Change this line */}
                </>
            )}
        </nav>
    );
}

export default Navbar;