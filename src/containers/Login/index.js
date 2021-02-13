import React, { useContext } from 'react'
import AppHeader from './../../components/AppHeader';
import Login from './../../components/Login';
import { GlobalContext } from './../../context/Provider';

function LoginContainer() {

    const { 
        authDispatch, 
        authState:{
            auth: { loading, error, data }
             },
        } = useContext(GlobalContext);

    console.log("data", data?.data);

    return (
        <div>
            <AppHeader/>
            {/* <Login/> */}
            <h1>{data ? `Bienvenue ${data?.data.prenom.toUpperCase()} ${data?.data.nom.toUpperCase()}` : "Se connecter"}</h1>
        </div>
    )
}

export default LoginContainer