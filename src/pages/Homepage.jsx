import React from 'react';
import { useAuth } from '../AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import clubData from '../data/clubdata.json';
import './Homepage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    const { currentUser, subscribedClubId, setSubscribedClubId } = useAuth();

    const handleSubscribe = async (clubId) => {
        console.log('handleSubscribe called with clubId:', clubId); // Add this line
        try {
            await updateDoc(doc(db, 'users', currentUser.uid), {
                clubId: clubId
            });
            setSubscribedClubId(clubId); // Update subscribedClubId state after Firestore document
            console.log('subscribedClubId after update:', subscribedClubId); // Add this line
        } catch (error) {
            console.error('Error updating club subscription.', error);
        }
    };

    const handleUnsubscribe = async () => {
        try {
            await updateDoc(doc(db, 'users', currentUser.uid), {
                clubId: null
            });
            setSubscribedClubId(null); // Update subscribedClubId state after Firestore document
        } catch (error) {
            console.error('Error removing club subscription.', error);
        }
    };

    return (
        <div className="container">
            <div>
                <h2 className="club-list-header">Clubes</h2>
                <div className="club-list">
                    {clubData.map(club => (
                        <div key={club.ID} className="club-item">
                            <div className="club-content">
                                <h3 className="club-title">{club.nombre}</h3>
                                <p className="club-description">{club.descripcion}</p>
                                <Link to={`/clubs/${club.ID}`} className="club-link">Ver Club</Link>
                                {subscribedClubId === club.ID ? (
                                    <button onClick={handleUnsubscribe} className="unsubscribe-button">Unsubscribe</button>
                                ) : (
                                    <button onClick={() => handleSubscribe(club.ID)} className="subscribe-button">Subscribe</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;