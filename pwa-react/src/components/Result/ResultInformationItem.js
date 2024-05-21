import React from 'react';
import styled from 'styled-components';
import { FaPaw } from "react-icons/fa6";

const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    min-height: 350px;

    .disease {
        font-size: 19px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .percent {
        font-size: 18px;
        font-weight: bold;
        color: gray;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .lable {
        font-size: 20px;
        font-weight: bold;
        padding-left: 10px;
        margin-bottom: 5px;
    }

    .items {
        display: flex;
        gap: 10px;
        padding: 2px 0 2px 20px;
        .icon {
            color: #f02b70
        }
    }
`;

const ResultInformationItem = ({disease, percent, reason}) => {
    return (
        <Container>
            <div className='disease'>{disease}</div>
            <div className='percent'>{percent}%</div>
            <div className='lable'>원인</div>
            {reason.map(item => <div key={item} className='items'>
                <FaPaw className='icon'/>
                {item}
            </div>)}
        </Container>
    );
};

export default ResultInformationItem;