import React from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    box-sizing: border-box;
    border-radius: 12px;
    width: 120px;
    height: 95px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: lightgray;
    font-size: 25px;
    flex: 0 0 auto;
`;

const PetAddBtnComponent = () => {

    const navigate = useNavigate();

    return (
        <Container onClick={() => {navigate('/addpet')}}>
            <FaPlus />
        </Container>
    );
};

export default PetAddBtnComponent;