import React from 'react'
import AppHeader from './../../components/AppHeader';
import LoginUI from './../../layout/Login/index';
import useForm from './useForm';

function LoginContainer() {
    return (
        <div>
            <AppHeader/>
            <LoginUI form={useForm()}/>
        </div>
    )
}

export default LoginContainer
