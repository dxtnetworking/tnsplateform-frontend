import React from "react";
import axios from 'axios'
import logo from "../assets/images/logo.PNG"
import { Header as SUHeader, Menu, Icon, Image, Button, Segment } from 'semantic-ui-react'
import { Link, useLocation } from "react-router-dom";

const handleSignout = (e) => {
    e.preventDefault();
    axios({
        method: 'DELETE',
        url: 'http://localhost:3001/auth/sign_out',
        data: JSON.parse(localStorage.user)
    })
    .then(() => {
        localStorage.removeItem('user')
        window.location = '/'
    })

}

function AppHeader() {
    const currentUser = localStorage.getItem('user')
    const {pathname} =  useLocation();
    console.log("pathname", pathname);

    return (
        <Menu secondary pointing>            
            <Image src={logo} width="60"/>
            <Menu.Item as={Link} to="/">DXTC Networking</Menu.Item>
            {currentUser && 
            <Menu.Item as={Link} to="/profiles">Profiles</Menu.Item>
            }         
            {currentUser && 
            <Menu.Item position="right">
                {JSON.parse(currentUser).uid}
                <Button as={Link} onClick={handleSignout} basic icon color="red">
                   <Icon name="logout"></Icon> 
                   Se déconnecter
                   {/* <a href="#" onClick={handleSignout}></a> */}
                </Button> 
                
            </Menu.Item>
            }
            {!currentUser && 
            <Menu.Item position="right">
                <Button as={Link} to="/auth/login" basic icon color="green">
                   <Icon name="sign-in"></Icon> 
                   Se connecter
                </Button> 
            </Menu.Item>
            }
        </Menu>
        // <Segment inverted clearing>
        //     <SUHeader floated='left'>
        //         Logo
        //     </SUHeader>
        //     {currentUser && 
            
        //     <SUHeader floated='right'>
        //         {JSON.parse(currentUser).uid}
        //         <a href="#" onClick={handleSignout}>Se déconnecter</a>
        //     </SUHeader>
        //     }      
        //     <SUHeader floated='left'>
        //         Profiles
        //     </SUHeader>
        // </Segment>
    )
}


export default AppHeader