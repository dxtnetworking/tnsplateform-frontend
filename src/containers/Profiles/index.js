import React, { useContext, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../../context/Provider';
import AppHeader from './../../components/AppHeader';
import getProfiles from '../../context/actions/profiles/getProfiles';

function ProfileContainer() {
    const context = useContext(GlobalContext);

    useEffect(() => {
        getProfiles();
    }, [])

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
