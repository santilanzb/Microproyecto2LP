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

    const handleLogin = () => {
        // Verificar si los campos están vacíos
        if (!username || !password) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        // Aquí podrías agregar lógica para enviar las credenciales del usuario al servidor
        // para autenticación. Por ahora, simplemente imprimiremos las credenciales en la consola.
        console.log('Username:', username);
        console.log('Password:', password);

        // Simulamos un inicio de sesión exitoso estableciendo loggedIn en true.
        setLoggedIn(true);
        // Limpiar el mensaje de error
        setError('');
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
