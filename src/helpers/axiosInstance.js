/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default (history=null) => {
    
    let headers = {};
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const currentUser = JSON.parse(localStorage.getItem('user'));

    if (currentUser) {  
        headers.uid = currentUser.uid;
        headers['access-token'] = currentUser['access-token'];
        headers.client = currentUser.client;
    }

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers,
    });

    axiosInstance.interceptors.response.use(
        (response) => 
            new Promise((resolve, _reject) => {
                resolve(response);
            }),
        (error) => {
            if (!error.response) {
                return new Promise((_resolve, reject) => {
                    reject(error);
                });
            }

            if (error.response.status === 403) { 

                localStorage.removeItem('user');
                
                if (history) {
                    history.push('/auth/login')
                } else {
                    window.location = '/auth/login';
                }

            } else {
                return new Promise((_resolve, reject) => {
                    reject(error);
                });
            }
        }
    )

    return axiosInstance;
}

