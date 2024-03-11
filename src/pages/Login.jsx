import React, { useEffect, useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Aquí podrías agregar lógica para verificar si el usuario ya está autenticado
        // y actualizar el estado loggedIn en consecuencia.
    }, []);

    const handleLogin = async () => {
        // Verificar si los campos están vacíos
        if (!username || !password) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        try {
            // Authenticate the user with Firebase
            await signInWithEmailAndPassword(auth, username, password);
            // If the authentication is successful, the user is logged in
            setLoggedIn(true);
            // Clear the error message
            setError('');
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
