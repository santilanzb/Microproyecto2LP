import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import RegisterView from './pages/Register.jsx';
import HomePage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/Landingpage.jsx';
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
                    </Routes>
                </Router>
            </MessageContext.Provider>
        </AuthProvider>
    );
}

export default App;