import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/Login/LoginComponent';
import { signInAsync } from '../modules/Account';

const LoginContainer = ({signInAsync}) => {
    return (
        <LoginComponent facebookSignin={signInAsync}/>
    );
};

export default connect(({Account}) => ({

}),{
    signInAsync
})(LoginContainer);