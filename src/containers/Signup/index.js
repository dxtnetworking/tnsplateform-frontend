import React, { useEffect }from 'react'
import AppHeader from './../../components/AppHeader';
import SignupUI from './../../layout/Signup/index';
import useForm from './useForm';

function SignupContainer() {
    useEffect(() => {}, [])

    return (
        <div>
            <AppHeader/>
            <SignupUI form={useForm()}/>
        </div>
    )
}

export default SignupContainer
