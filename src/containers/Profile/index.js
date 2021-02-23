import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AppHeader from '../../components/AppHeader'
import getProfile from '../../context/actions/profile/getProfile';
import ProfileShowUI from '../../layout/Profile/Show';
import { GlobalContext } from './../../context/Provider';

function ProfileContainer() {
    const {profileDispatch, profileState} =  useContext(GlobalContext);
    const [profState, setProfState] = useState(profileState)
    const history = useHistory();

    const url = history.location.pathname;

    console.log("Prof State", profState);
    console.log("Profile State", profileState);
    console.log("Get PRofile", getProfile(history, url))

    useEffect(() => {
        // (getProfile(history, url))
    }, []);

    return (
        <div>
            <AppHeader/>
             <ProfileShowUI state={profState} />
        </div>
    )
}

export default ProfileContainer
