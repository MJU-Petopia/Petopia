import React from 'react';
import styled from 'styled-components';
import { FaPaw } from "react-icons/fa6";

const Container = styled.div`
    margin-top: 20px;
    min-height: 370px;
    .title {
        font-size: 20px;
        font-weight: bold;
        display:flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .body {
        font-size: 18px;
        font-weight: bold;
        margin-left: 20px;

        div {
            margin: 10px 0;
            .icon {
                color: #f02b70;
                margin-right: 10px;
            }
        }
    }
`;

const ResultSummaryItem = ({result}) => {
    return (
        <Container>
            <div className='title'>요약</div>
            <div className='body'>
                {result && result.map(([key, value]) => <div key={key}>
                    <FaPaw className='icon'/>{key}:  {Math.round(value*10000)/100}%
                </div>)}
            </div>
        </Container>
    );
};

export default ResultSummaryItem;