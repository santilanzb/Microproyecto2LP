import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;