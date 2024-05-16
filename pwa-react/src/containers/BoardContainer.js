import React, { useState } from 'react';
import { connect } from 'react-redux';
import BoardComponent from '../components/Board/BoardComponent';
import { useNavigate } from 'react-router-dom';

const BoardContainer = ({feedList}) => {

    const [search, setSearch] = useState(null);

    const timeCalculator = (time) => {
        const diffMs = Date.now() - time;
        if (diffMs < 3600000) {
            return `${Math.round(diffMs/60000)}분 전`
        } else if (diffMs < 86400000) {
            return `${Math.round(diffMs/3600000)}시간 전`
        } else {
            return `${Math.round(diffMs/86400000)}일 전`
        }
    }

    const naviagte = useNavigate();
    const onAddBtnClicked = (() => {
        naviagte('/addboard')
    })

    return (
        <BoardComponent 
            feedList={feedList} 
            search={search} 
            setSearch={setSearch} 
            timeCalculator={timeCalculator} 
            onAddBtnClicked={onAddBtnClicked}
        />
    );
};

export default connect(({Board}) => ({
    feedList: Board.feedList
}),{})(BoardContainer);