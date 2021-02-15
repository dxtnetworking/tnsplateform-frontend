import { 
    LOGIN_ERROR, 
    LOGIN_LOADING,
    LOGIN_SUCCESS } from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axios';

export const login = ({
    email, 
    password
    }) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    });
    axiosInstance
    .post('/auth/sign_in', {email, password}) // TODO: Corriger le lien
    .then((res) => {
        console.log("My Headers", res.headers);
       
        axiosInstance.get('/auth/validate_token', {...res.headers})

    

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
            payload: err.response ? err.response.data.errors : "Impossible de se connecter"
        });
    });
}