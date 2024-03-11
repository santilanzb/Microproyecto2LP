import React from 'react';
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
    );
}

export default App;