import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setUserdata } from '../modules/Profile';

const VerificationPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    

    useEffect(() => {

        const id = searchParams.get('id');
        const name = searchParams.get('name');
        const email = searchParams.get('email');
        const gender = searchParams.get('gender');
        const phone = searchParams.get('phone');

        const data = {
            name: name,
            email: email,
            gender: gender,
            phone: phone,
        }

        window.sessionStorage.setItem('id', id);
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('email', email);
        window.sessionStorage.setItem('gender', gender);
        window.sessionStorage.setItem('phone', phone);
        dispatch(setUserdata(data))
        navigate('/');
    },[])

    return (
        <div>
            
        </div>
    );
};

export default VerificationPage;