import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import ProfileChangeComponent from '../components/Profile/ProfileChangeComponent';

const ProfileChangePage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                프로필 변경
            </AppbarComponent>
            <ProfileChangeComponent/>
        </>
    );
};

export default ProfileChangePage;