import React from 'react';
import styled from 'styled-components';
import { FaPaw } from "react-icons/fa6";

const Container = styled.div`
    width: 100%;
    margin-top: 15px;
    min-height: 350px;
    padding-bottom: 20px;

    .disease {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .percent {
        font-size: 16px;
        font-weight: bold;
        color: gray;
        display: flex;
        justify-content: center;
    }

    .lable {
        font-size: 18px;
        font-weight: bold;
        padding-left: 10px;
        margin: 3px 0
    }

    .reason {
        display: flex;
        gap: 10px;
        .icon {
            color: #f02b70
        }
    }

    .items {
        padding: 2px 0 2px 20px;
        font-size: 15px;
    }
`;

const ResultInformationItem = ({disease, percent, reason, symptom, cure}) => {
    return (
        <Container>
            <div className='disease'>{disease}</div>
            <div className='percent'>{percent}%</div>
            <div className='lable'>원인</div>
            {reason.map(item => <div key={item} className='items reason'>
                <FaPaw className='icon'/>
                {item}
            </div>)}
            <div className='lable'>증상</div>
            <div className='items'>{symptom}</div>
            <div className='lable'>해결책</div>
            <div className='items'>{cure}</div>
        </Container>
    );
};

export default ResultInformationItem;