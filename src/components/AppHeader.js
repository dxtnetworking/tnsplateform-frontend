import React from "react";
import axios from 'axios'
import { Header as SUHeader, Segment } from 'semantic-ui-react'

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

    return (
        <Segment inverted clearing>
            <SUHeader floated='left'>
                Logo
            </SUHeader>
            {currentUser && 
            
            <SUHeader floated='right'>
                {JSON.parse(currentUser).uid}
                <a href="#" onClick={handleSignout}>Se déconnecter</a>
            </SUHeader>
            }      
            <SUHeader floated='left'>
                Profiles
            </SUHeader>
        </Segment>
    )
}


export default AppHeader