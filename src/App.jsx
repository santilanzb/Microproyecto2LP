import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import RegisterView from './pages/Register.jsx';
import HomePage from './pages/Homepage.jsx'; // Import the HomePage component
import { MessageContext } from './MessageContext';

function App() {
    const [message, setMessage] = useState('');

    return (
        <AuthProvider>
            <MessageContext.Provider value={{ message, setMessage }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<RegisterView />} />
                        <Route path="/Homepage" element={<HomePage />} /> {/* Add this line */}
                    </Routes>
                </Router>
            </MessageContext.Provider>
        </AuthProvider>
    );
}

export default App;