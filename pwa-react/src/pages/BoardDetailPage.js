import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import BoardDetailContainer from '../containers/BoardDetailContainer';

const BoardDetailPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}/>
            <BoardDetailContainer />
        </>
    );
};

export default BoardDetailPage;