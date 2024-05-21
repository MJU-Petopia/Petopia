import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingComponent = () => {
    return (
        <Container className='loading'>
            로딩 중...
        </Container>
    );
};

export default LoadingComponent;