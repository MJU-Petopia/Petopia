import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import AddBoardContainer from '../containers/AddBoardContainer';

const AddBoardPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                글쓰기
            </AppbarComponent>
            <AddBoardContainer />
        </>
    );
};

export default AddBoardPage;