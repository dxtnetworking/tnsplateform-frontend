import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance"
import { 
    PROFILES_LOADING, 
    PROFILES_LOAD_SUCCESS,
    PROFILES_LOAD_ERROR,
} from './../../../constants/actionTypes/index';

/* eslint-disable import/no-anonymous-default-export */
export default (history) => (dispatch) => {    
    dispatch({
        type: PROFILES_LOADING,
    });

    axiosInstance(history)
        .get('/profiles')
        .then(res => { 
            dispatch({
                type: PROFILES_LOAD_SUCCESS,
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({
                type: PROFILES_LOAD_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR
            });
        });
}