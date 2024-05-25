import React, { useState } from 'react';
import ProfileChangeComponent from '../components/Profile/ProfileChangeComponent';
import { connect } from 'react-redux';
import { editUserAsync } from '../modules/Profile';
import { changeProfileImage } from '../modules/Profile';

const ProfileChangeContainer = ({profileIMG, changeProfileImage,editUserAsync}) => {

    const [name, setName] = useState(window.sessionStorage.getItem('name'));
    const [email, setEmail] = useState(window.sessionStorage.getItem('email'));
    const [phone, setPhone] = useState(window.sessionStorage.getItem('phone') === 'null' ? '' : window.sessionStorage.getItem('phone'));


    return (
        <ProfileChangeComponent name={name} email={email} phone={phone} profileIMG={profileIMG} setName={setName} setPhone={setPhone} editUserAsync={editUserAsync} changeProfileImage={changeProfileImage}/>
    );
};

export default connect(({Profile})=>({
    profileIMG: Profile.profileIMG
}),{
    editUserAsync,
    changeProfileImage
})(ProfileChangeContainer);