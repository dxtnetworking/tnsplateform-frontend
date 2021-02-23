import React, { useContext, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../../context/Provider';
import AppHeader from './../../components/AppHeader';
import getProfiles from '../../context/actions/profiles/getProfiles';
import { useHistory } from 'react-router-dom';
import ProfilesListUI from '../../layout/Profiles/Liste';

function ProfilesContainer() {
    const { profilesDispatch, profilesState } = useContext(GlobalContext);
    const history = useHistory();

    useEffect(() => {
        getProfiles(history)(profilesDispatch);
    }, [])

    return (
        <div>
            <AppHeader/>
            <Container>
                <ProfilesListUI state={profilesState}/>
            </Container>          
        </div>
    )
}

export default ProfilesContainer
