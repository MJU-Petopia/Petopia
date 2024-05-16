import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import PetDetailComponent from '../components/PetDetail/PetDetailComponent';

const PetDetailPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                반려동물 정보
            </AppbarComponent>
            <PetDetailComponent />
        </>
    );
};

export default PetDetailPage;