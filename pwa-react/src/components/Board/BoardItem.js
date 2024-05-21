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
            <div className='title'>{feed.title}</div>
            <div className='content'>{feed.content}</div>
            <div className='additional'>
                <div className='time'>{timeCalculator(new Date(feed.createDate))}</div>
                <CustomRoundDiv margin={'0 8px 0 0'}/>
                <span>{feed.user.username}</span>
            </div>
        </Container>
    );
};

export default BoardItem;