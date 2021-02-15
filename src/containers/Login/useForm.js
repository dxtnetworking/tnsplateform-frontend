/* eslint-disable import/no-anonymous-default-export */
import { useContext, useState } from "react"
import { GlobalContext } from '../../context/Provider';
import { login } from './../../context/actions/auth/login';

export default () => {
    const [form, setForm] = useState({});
    const { 
        authDispatch, 
        authState:{
            auth: { loading, error, data}
             },
        } = useContext(GlobalContext);

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    const loginFormValid = 
        form.email?.length &&
        form.password?.length

    const onSubmit = () => {
        login(form)(authDispatch)
    }

    return {form, onChange, loading, error, loginFormValid, onSubmit}
}