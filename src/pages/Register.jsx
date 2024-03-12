import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db, signInWithPopup, createUserWithEmailAndPassword } from '/firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import './Register.css';
import { MessageContext } from '../MessageContext';
import { updateProfile } from 'firebase/auth';

function RegisterView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [favoriteGame, setFavoriteGame] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const { setMessage } = useContext(MessageContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleFavoriteGameChange = (event) => {
        setFavoriteGame(event.target.value);
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/Homepage');
        }
    }, [shouldNavigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(`Form submitted with email: ${email}`);
            console.log('User registered with Firebase Auth:', userCredential.user);

            await updateProfile(userCredential.user, {
                displayName: name,
            });
            console.log('User profile updated');

            // Add the user to Firestore
            const userDoc = {
                uid: userCredential.user.uid,
                email: email,
                name: name,
                favoriteGame: favoriteGame
            };
            await setDoc(doc(db, 'users', userCredential.user.uid), userDoc); // Change this line
            console.log('User added to Firestore');

            setMessage('Registration successful!');
            setTimeout(() => {
                setShouldNavigate(true); // Set shouldNavigate to true after 2 seconds
            }, 2000);// Set success message

        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // User is signed in. You can get the user info from the returned result.
        } catch (error) {
            // Handle errors here.
            console.error(error);
        }
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Favorite Game"
                value={favoriteGame}
                onChange={handleFavoriteGameChange}
            />
            <button onClick={handleSubmit}>Register</button>
            <button onClick={handleGoogleSignIn}>Register with Google</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">You have successfully registered!</p>}
        </div>
    );
}

export default RegisterView;

