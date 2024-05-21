import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaFacebookF } from "react-icons/fa6";


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
`;

const LoginComponent = ({facebookSignin}) => {
    return (
        <Container>
            <CustomRoundDiv height={200} width={200}/>
            <a href='http://localhost:8080/oauth2/authorization/facebook'>
                <CustomRoundDiv height={50} width={300} borderradius={25} backgroundcolor={'#1877F2'} position={'relative'} >
                    <FaFacebookF className='logo'/>
                    Facebook Singin
                </CustomRoundDiv>
            </a>
        </Container>
    );
};

export default LoginComponent;