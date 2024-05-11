import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from './CustomComponents/CustomRoundDiv';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";


const Appbar = styled.div`
    position: fixed;
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
    div {
        position:fixed;
        left: 10px;
    }
`;

const AppbarComponent = ({isHome, children}) => {

    const navigate = useNavigate();

    return <Appbar>
        {isHome ? <Inner $ishome={isHome}>
            <CustomRoundDiv height={40} width={80}>
                Logo
            </CustomRoundDiv>
        </Inner> 
        : <Inner $ishome={isHome}>
                <div>
                    <IoIosArrowBack onClick={() => {navigate(-1)}}/>
                </div>
                {children}
        </Inner>}
    </Appbar>
};

export default AppbarComponent;