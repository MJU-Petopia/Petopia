import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import AddPetContainer from '../containers/AddPetContainer';

const AddpetPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                반려동물 등록
            </AppbarComponent>
            <AddPetContainer/>
        </>
    );
};

export default AddpetPage;