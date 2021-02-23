import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance"
import { 
    PROFILE_LOADING, 
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_ERROR,
} from '../../../constants/actionTypes/index';

/* eslint-disable import/no-anonymous-default-export */
export default (history, pathname) => {
    
    // dispatch({
    //     type: PROFILE_LOADING,
    // })
    axiosInstance(history)
    .get(pathname)
    .then(res => {     
        return res.data; 
        // dispatch({
        //     type: PROFILE_LOAD_SUCCESS,
            // payload: res.data,
        // });
    })
    .catch(err => {
        return err.response.data;

        // dispatch({
            // type: PROFILE_LOAD_ERROR,
            // payload: err.response ? err.response.data : CONNECTION_ERROR
        // });
    });
}