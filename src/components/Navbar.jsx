import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">Login</Link>
        </nav>
    );
}

export default Navbar;