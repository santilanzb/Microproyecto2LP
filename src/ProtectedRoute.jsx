import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ path, children }) {
    const { currentUser } = useAuth();

    return (
        <Route path={path}>
            {currentUser ? children : <Navigate to="/login" />}
        </Route>
    );
}

export default ProtectedRoute;