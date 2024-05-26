import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import PetDetailContainer from '../containers/PetDetailContainer';

const PetDetailPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                반려동물 정보
            </AppbarComponent>
            <PetDetailContainer />
        </>
    );
};

export default PetDetailPage;