import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="text-center">
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    }

    if (user && user?.uid) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;