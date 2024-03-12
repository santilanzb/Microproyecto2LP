import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '/firebase.js';
import './Profile.css';
import { updateProfile } from 'firebase/auth';

function Profile() {
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteGame, setFavoriteGame] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (currentUser) {
            const getUserData = async () => {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUserData(userData);
                        setName(userData.name);
                        setEmail(userData.email);
                        setFavoriteGame(userData.favoriteGame);
                    } else {
                        setError('User not found in Firestore.');
                    }
                } catch (error) {
                    setError('Error fetching user data from Firestore.');
                }
            };
            getUserData();
        }
    }, [currentUser]);

    const handleUpdateProfile = async () => {
        try {
            // Update the profile in Firestore
            await updateDoc(doc(db, 'users', currentUser.uid), {
                name: name,
                email: email,
                favoriteGame: favoriteGame
            });

            // Update the profile in Firebase Authentication
            await updateProfile(currentUser, {
                displayName: name,
                email: email,
            });

            setSuccessMessage('Profile updated successfully.');
        } catch (error) {
            setError('Error updating profile.');
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h2>Mi Perfil</h2>
            <div className="profile-info">
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} disabled/>
                </div>
                <div>
                    <label>Juego favorito:</label>
                    <input type="text" value={favoriteGame} onChange={(e) => setFavoriteGame(e.target.value)}/>
                </div>
                <div>
                    <label>Club ID:</label>
                    <p>{userData.clubId ? `Club ID: ${userData.clubId}` : 'No Club ID'}</p> {/* Display the club ID here */}
                </div>
            </div>
            <button className="btn-update" onClick={handleUpdateProfile}>Actualizar</button>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default Profile;