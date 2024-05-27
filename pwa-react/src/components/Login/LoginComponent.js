import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaFacebookF } from "react-icons/fa6";
import logo from '../../images/logo_square.png';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .logo {
        position: absolute;
        font-size: 20px;
        left: 20px;
        top: 15px;
    }

    .applogo {
        height: 200px;
        width: 200px;
        background-color: lightgray;
    }
`;

const LoginComponent = () => {

    return (
        <Container>
            <img src={logo} className='applogo'/>
            <a href='http://localhost:8080/oauth2/authorization/facebook'>
                <CustomRoundDiv height={50} width={300} borderradius={25} backgroundcolor={'#1877F2'} position={'relative'} >
                    <FaFacebookF className='logo'/>
                    Facebook Signin
                </CustomRoundDiv>
            </a>
        </Container>
    );
};

export default LoginComponent;