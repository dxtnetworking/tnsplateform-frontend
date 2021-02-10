import { useState } from "react"

export default () => {
    const [form, setForm] = useState({});

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    console.log(form);

    const registerFormValid = 
        form.prenom?.length && 
        form.nom?.length &&
        form.email?.length &&
        form.password?.length >= 6

    return {form, onChange, registerFormValid}
}