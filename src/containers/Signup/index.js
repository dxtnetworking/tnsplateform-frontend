import React, { useEffect }from 'react'
import { signup } from '../../context/actions/signup'
import AppHeader from './../../components/AppHeader';
import SignupUI from './../../layout/Signup/index';
import useForm from './useForm';

function SignupContainer() {
    useEffect(() => {
        signup();
    }, [])

    return (
        <div>
            <AppHeader/>
            <SignupUI form={useForm()}/>
        </div>
    )
}

export default SignupContainer
