import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const Appbar = styled.div`
    position: fixed;
    z-index: 3;
    top: 0;
    height: 55px;
    background-color: white;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0px 6px 5px 0px rgba(84,84,84,0.1);
`;

const Inner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: ${props => props.$ishome ? "left" : "center"};
    .back {
        position:fixed;
        left: 10px;
    }
`;

const LogoContainer = styled.div`
    height: 40px;
    width: 130px;
    background-image: url('images/logo_rectangle.png');
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 10px;
`;

const AppbarComponent = ({isHome, children}) => {

    const navigate = useNavigate();

    return <Appbar>
        {isHome ? 
        <Inner $ishome={isHome}>
            <LogoContainer />
        </Inner> 
        : <Inner $ishome={isHome}>
                <div className='back'>
                    <IoIosArrowBack onClick={() => {navigate(-1)}}/>
                </div>
                {children}
        </Inner>}
    </Appbar>
};

export default AppbarComponent;