import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import './Login.css';
import { auth, googleProvider, db, signInWithPopup } from '/firebase.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Add this line
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

            // If the authentication is successful and the user exists in Firestore, navigate to the Homepage
            navigate('/Homepage'); // Change this line
            setLoggedIn(true);
        } catch (error) {
            // If there's an error (e.g., invalid credentials), display an error message
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // User is signed in. You can get the user info from the returned result.
            const user = result.user;

            // Check if the user exists in Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (!userDoc.exists()) {
                setError('User not found in Firestore.');
                return;
            }

            // Navigate to the homepage
            navigate('/Homepage');
        } catch (error) {
            // Handle errors here.
            console.error(error);
        }
    };




    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <input
                type="text"
                placeholder="Email"
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
            <button onClick={handleGoogleSignIn}>Iniciar sesión con Google</button>
            {error && <p className="error-message">{error}</p>}
            {loggedIn && <p className="success-message">¡Has iniciado sesión correctamente!</p>}
        </div>
    );
}

export default Login;