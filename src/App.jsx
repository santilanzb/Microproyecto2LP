import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ClubPage from './pages/Club';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/clubs/:clubId" element={<ClubPage />} />
                </Routes>
            </div>
        </Router>
/* =======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login';
import RegisterView from './pages/Register.jsx';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/login" element={<Login />} />
                        <ProtectedRoute path="/protected" element={<ProtectedComponent />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
>>>>>>> e64524f5212b3ce600eaffcc965df58cf70c3e8a */
    );
}

export default App;
