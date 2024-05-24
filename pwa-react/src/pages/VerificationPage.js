import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerificationPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('accessToken');
        localStorage.setItem('accessToken', token);
        console.log(token)
        navigate('/', {replace: true})
    },[])

    return (
        <div>
            
        </div>
    );
};

export default VerificationPage;