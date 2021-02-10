import React, { useContext } from 'react'
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../../context/Provider';
import AppHeader from './../../components/AppHeader';

function ProfileContainer() {
    const context = useContext(GlobalContext);
    console.log(context);
    return (
        <div>
            <AppHeader/>
            <Container>
                <h2>Liste des membres</h2>
            </Container>          
        </div>
    )
}

export default ProfileContainer
