/* eslint-disable import/no-anonymous-default-export */
import { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { signup } from "../../context/actions/auth/signup";
import { GlobalContext } from '../../context/Provider';

export default () => {
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const { 
        authDispatch, 
        authState:{
            auth: { loading, error, data}
             },
        } = useContext(GlobalContext);
    const history = useHistory();

    useEffect(() => {
        let newError = {}

        for (const item in error) { 
          newError[item] = error[item][0];      
        }
        
        setFieldErrors({ ...fieldErrors, ...newError});  
    }, [error])

    useEffect(() => {
      if (data) {
          history.push('/auth/login');
      }  
    }, [data])

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    console.log("form", form);

    const registerFormValid = 
        form.prenom?.length && 
        form.nom?.length &&
        form.email?.length &&
        form.password?.length

    const onSubmit = () => {
        signup(form)(authDispatch)
    }

    return {form, onChange, loading, fieldErrors,registerFormValid, onSubmit}
}