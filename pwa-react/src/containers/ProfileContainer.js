import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../components/Profile/ProfileComponent';

const ProfileContainer = ({name,email, petList}) => {
    return (
        <ProfileComponent name={name} email={email} petList={petList}/>
    );
};

export default connect(({Profile}) => ({
    name: Profile.name,
    email: Profile.email,
    petList: Profile.pet
}),{

})(ProfileContainer);