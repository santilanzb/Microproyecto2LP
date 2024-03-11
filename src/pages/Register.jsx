import React, { useState } from 'react';
import { auth, googleProvider, db, signInWithPopup, createUserWithEmailAndPassword } from '/firebase.js';
import { addDoc, collection } from 'firebase/firestore';
import './Register.css';

function RegisterView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

            await userCredential.user.updateProfile({
                displayName: name,
            });
            console.log('User profile updated');

            // Add the user to Firestore
            const userDoc = {
                uid: userCredential.user.uid,
                email: email,
                name: name,
            };
            await addDoc(collection(db, 'users'), userDoc);
            console.log('User added to Firestore');
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
        <form onSubmit={handleSubmit} className="register-form">
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} required />
            </label>
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit">Register</button>
            <button type="button" onClick={handleGoogleSignIn}>Register with Google</button>
        </form>
    );
}

export default RegisterView;

