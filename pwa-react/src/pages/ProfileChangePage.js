import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import ProfileChangeContainer from '../containers/ProfileChangeContainer';

const ProfileChangePage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                프로필 변경
            </AppbarComponent>
            <ProfileChangeContainer />
        </>
    );
};

export default ProfileChangePage;