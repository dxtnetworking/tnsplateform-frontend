
import { 
    SIGNUP_ERROR, 
    SIGNUP_LOADING,
    SIGNUP_SUCCESS,
 } from '../../../constants/actionTypes/index';
 import { CONNECTION_ERROR } from '../../../constants/api';
import axiosInstance from '../../../helpers/axiosInstance';

export const signup = ({
    prenom, 
    nom, 
    email, 
    password
    }) => (dispatch) => {
    dispatch({
        type: SIGNUP_LOADING,
    });
    axiosInstance()
    .post('/auth', {prenom, nom, email, password}) // TODO: Corriger le lien
    .then((res) => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    })
    .catch((err) => {
        dispatch({
            type: SIGNUP_ERROR,
            payload: err.response ? err.response.data.errors : CONNECTION_ERROR
        });
    });
}