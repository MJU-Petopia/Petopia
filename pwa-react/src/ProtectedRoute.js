import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const auth = useSelector(({Profile}) => Profile.authenticated);
    return auth ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;