import React, { createContext, useReducer } from "react";
import profilesInitialState from "./initialstates/profilesInitialState";
import profileInitialState from "./initialstates/profileInitialState";
import authInitialState from "./initialstates/authInitialState";
import auth from './reducers/auth';
import profiles from "./reducers/profiles";
import profile from "./reducers/profile";

export const GlobalContext = createContext({})
export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);     
    const [profilesState, profilesDispatch] = useReducer(profiles, profilesInitialState);
    const [profileState, profileDispatch] = useReducer(profile, profileInitialState);

    return (
        <GlobalContext.Provider value={{
            authState, authDispatch,
            profileState, profileDispatch,
            profilesState, profilesDispatch,
        }}>{children}</GlobalContext.Provider>
    );
};