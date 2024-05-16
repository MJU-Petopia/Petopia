import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import BoardAddComponent from '../components/Board/BoardAddComponent';

const AddBoardPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                글쓰기
            </AppbarComponent>
            <BoardAddComponent />
        </>
    );
};

export default AddBoardPage;