import React from 'react';
import { connect } from 'react-redux';
import BoardComponent from '../components/Board/BoardComponent';
import { useNavigate } from 'react-router-dom';
import { onSearchinputChange } from '../modules/Borad';

const BoardContainer = ({feedList, searchInput, loadingBoard, onSearchinputChange}) => {

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
            search={searchInput} 
            setSearch={onSearchinputChange} 
            timeCalculator={timeCalculator} 
            onAddBtnClicked={onAddBtnClicked}
            loadingBoard={loadingBoard}
        />
    );
};

export default connect(({Board, Loading}) => ({
    feedList: Board.feedList,
    searchInput: Board.searchInput,
    loadingBoard: Loading['Board/GET_FEED']
}),{
    onSearchinputChange
})(BoardContainer);