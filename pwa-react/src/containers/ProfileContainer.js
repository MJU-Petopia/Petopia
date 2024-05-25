import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../components/Profile/ProfileComponent';
import { deleteUserAsync } from '../modules/Profile';


const ProfileContainer = ({name,email, petList, deleteUserAsync}) => {
    return (
        <ProfileComponent name={name} email={email} petList={petList} deleteUserAsync={deleteUserAsync}/>
    );
};

export default connect(({Profile}) => ({
    name: Profile.name,
    email: Profile.email,
    petList: Profile.pet
}),{
    deleteUserAsync
})(ProfileContainer);