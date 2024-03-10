import React, { useState } from 'react';
import './Register.css'; // Import CSS file

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Registered with:', { email, name, password });
    };

    const handleGoogleRegister = () => {
        // Handle Google registration logic here
        console.log('Registered with Google');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <div className="input-container">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="register-button" onClick={handleRegister}>Register</button>
            <button className="google-register-button" onClick={handleGoogleRegister}>Register with Google</button>
        </div>
    );
};

export default Register;