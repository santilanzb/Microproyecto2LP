import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuth } from '../AuthContext';
import './Navbar.css';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { auth, currentUser } = useAuth(); // Get the auth instance from AuthContext

    const handleLogout = async () => {
        try {
            await signOut(auth); // Pass the auth instance to signOut
            navigate('/');
        } catch (error) {
            console.error('Error signing out', error);
        }
    };

    return (
        <nav className="navbar">
            {(location.pathname === '/login' || location.pathname === '/register') && (
                <>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Log In</Link>
                </>
            )}
            {(location.pathname === '/Homepage' || location.pathname === '/Search' || location.pathname === '/profile' || location.pathname.includes('/clubs')) && (
                <>
                    <Link to="/Homepage" className="nav-link">Home</Link>
                    <Link to="/Search" className="nav-link">Videogames</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    {currentUser && <button onClick={handleLogout} className="nav-link">Logout</button>}
                </>
            )}
        </nav>
    );
}

export default Navbar;