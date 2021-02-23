import { 
    LOGIN_ERROR, 
    LOGIN_LOADING,
    LOGIN_SUCCESS,
 } from '../../../constants/actionTypes/index';
import { CONNECTION_ERROR } from '../../../constants/api';


import axiosInstance from '../../../helpers/axiosInstance';

export const login = ({
    email, 
    password
    }) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    });
    axiosInstance()
    .post('/auth/sign_in', {email, password})
    .then((res) => {
        localStorage.setItem('user',
            JSON.stringify({
                'uid': res.data.data.uid,
                'client': res.headers['client'],
                'access-token': res.headers['access-token'],
            }))

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        
        window.location = '/profiles'

    })
    .catch((err) => {
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response ? err.response.data.errors : CONNECTION_ERROR
        });
    });
}