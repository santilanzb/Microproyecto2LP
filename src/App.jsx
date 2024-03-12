import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import RegisterView from './pages/Register.jsx';
import HomePage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import ClubPage from './pages/Club.jsx';
import Profile from './pages/Profile.jsx';
import { MessageContext } from './MessageContext';

function App() {
    const [message, setMessage] = useState('');

    return (
        <AuthProvider>
            <MessageContext.Provider value={{ message, setMessage }}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<RegisterView />} />
                        <Route path="/Homepage" element={<HomePage />} /> 
                        <Route path="/login" element={<Login />} />
                        <Route path="/clubs/:clubId" element={<ClubPage />} /> 
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Router>
            </MessageContext.Provider>
        </AuthProvider>
    );
}

export default App;
