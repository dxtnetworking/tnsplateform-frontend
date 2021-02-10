import React, { createContext, useReducer } from "react";
import profilesInitialState from "./initialstates/profilesInitialState";
import authInitialState from "./initialstates/authInitialState";
import auth from './reducers/auth';
import profiles from "./reducers/profiles";

export const GlobalContext = createContext({})
export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(
        auth, 
        authInitialState);
    const [profilesState, profilesDispatch] = useReducer(
        profiles, 
        profilesInitialState);

    return (<GlobalContext.Provider value={{
            authState, 
            authDispatch,
            profilesState,
            profilesDispatch
        }}>{children}</GlobalContext.Provider>)
};