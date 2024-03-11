import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Check if the fields are empty
        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            // Authenticate the user with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, username, password);

            // Check if the user exists in Firestore
            const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
            if (!userDoc.exists()) {
                setError('User not found in Firestore.');
                return;
            }

            // If the authentication is successful and the user exists in Firestore, navigate to the clubs page
            navigate('/clubs');
        } catch (error) {
            // If there's an error (e.g., invalid credentials), display an error message
            setError('Invalid credentials. Please try again.');
        }
    };


    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
            {error && <p className="error-message">{error}</p>}
            {loggedIn && <p className="success-message">¡Has iniciado sesión correctamente!</p>}
        </div>
    );
}

export default Login;
