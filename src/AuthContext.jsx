import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '/firebase.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [subscribedClubId, setSubscribedClubId] = useState(null); // Add this line
    const auth = getAuth(); // Get the auth instance

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setCurrentUser({
                        ...user,
                        clubId: userData.clubId // Include the clubId
                    });
                    setSubscribedClubId(userData.clubId); // Add this line
                }
            } else {
                setCurrentUser(null);
                setSubscribedClubId(null); // Add this line
            }
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, auth, subscribedClubId, setSubscribedClubId }}> {/* Add subscribedClubId and setSubscribedClubId here */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);