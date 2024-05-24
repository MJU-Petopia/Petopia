import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const auth = useSelector(({User}) => User.authenticated);
    return auth ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;