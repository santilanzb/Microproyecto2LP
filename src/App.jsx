import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import RegisterView from './pages/Register.jsx';
import HomePage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/Landingpage.jsx';
import ClubPage from './pages/Club.jsx';
import SearchView from './pages/Search.jsx'; // Import the SearchView component
import { MessageContext } from './MessageContext';

function App() {
    const [message, setMessage] = useState('');
    const [isLandingPage, setIsLandingPage] = useState(localStorage.getItem('isLandingPage') === 'true');

    // Update local storage whenever isLandingPage changes
    useEffect(() => {
        localStorage.setItem('isLandingPage', isLandingPage);
    }, [isLandingPage]);


    return (
        <AuthProvider>
            <MessageContext.Provider value={{ message, setMessage }}>
                <Router>
                    <Navbar isLandingPage={isLandingPage} /> {/* Pass isLandingPage to Navbar */}
                    <Routes>
                        <Route path="/" element={<LandingPage setIsLandingPage={setIsLandingPage} />} /> {/* Pass setIsLandingPage to LandingPage */}
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/Homepage" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/clubs/:clubId" element={<ClubPage />} /> {/* Ruta para ClubPage con parámetro clubId */}
                        <Route path="/Search" element={<SearchView />} /> {/* Add this line */}
                    </Routes>
                </Router>
            </MessageContext.Provider>
        </AuthProvider>
    );
}

export default App;