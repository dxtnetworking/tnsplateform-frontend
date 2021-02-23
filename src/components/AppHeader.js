import React, { Fragment } from "react";
import axios from 'axios'
import logo from "../assets/images/logo.PNG"
import { Menu, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";

const handleSignout = (e) => {
    e.preventDefault();
    axios({
        method: 'DELETE',
        url: `${axiosInstance().defaults.baseURL}/auth/sign_out`,
        data: JSON.parse(localStorage.user)
    })
    .then(() => {
        localStorage.removeItem('user')
        window.location = '/'
    })
}


function AppHeader() {
    const currentUser = localStorage.getItem('user');

    return (
        <Menu secondary pointing>            
            <Image src={logo} width="60"/>
            <Menu.Item as={Link} to="/">DXTC Networking</Menu.Item>
            {currentUser && 
            <Fragment>
                <Menu.Item as={Link} to="/profiles">Profiles</Menu.Item>
                <Menu.Item position="right">
                    {JSON.parse(currentUser).uid}
                    <Button as={Link} onClick={handleSignout} basic icon color="red">
                    <Icon name="logout"></Icon> 
                    Se déconnecter
                    </Button> 
                    
                </Menu.Item>
            </Fragment>
            }
             {!currentUser && 
            <Fragment>
                <Menu.Item position="right">
                    <Button as={Link} to="/auth/signup" basic icon color="blue">
                        <Icon name="signup"></Icon> 
                        S'inscrire
                    </Button> 
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} to="/auth/login" basic icon color="green">
                    <Icon name="sign-in"></Icon> 
                    Se connecter
                    </Button> 
                </Menu.Item>
            </Fragment>
            }
        </Menu>
    )
}


export default AppHeader