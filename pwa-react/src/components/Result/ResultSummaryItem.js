import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 20px;
    
    .title {
        font-size: 20px;
        font-weight: bold;
        display:flex;
        justify-content: center;
        min-height: 350px;
        background-color: lightgray;
        margin-bottom: 20px;
    }
`;

const ResultSummaryItem = ({result}) => {
    return (
        <Container>
            <div className='title'>요약</div>
            
        </Container>
    );
};

export default ResultSummaryItem;