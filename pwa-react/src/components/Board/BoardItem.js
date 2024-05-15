import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';

const Container = styled.div`
    color: gray;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;

    .title {
        color: black;
        font-weight: bold;
    }

    .content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .additional {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 5px;

        .time {
            border-right: 1px solid lightgray;
            margin-right: 10px;
            padding-right: 10px;
        }
    }
`;

const BoardItem = ({feed, timeCalculator}) => {
    return (
        <Container>
            <div className='title'>제목</div>
            <div className='content'>내용 한줄 미리보기 내용 한줄 미리보기 내용 한줄 비리보기 sodyd </div>
            <div className='additional'>
                <div className='time'>{timeCalculator(new Date("2024-04-28"))}</div>
                <CustomRoundDiv margin={'0 8px 0 0'}/>
                <span>작성자 이름</span>
            </div>
        </Container>
    );
};

export default BoardItem;