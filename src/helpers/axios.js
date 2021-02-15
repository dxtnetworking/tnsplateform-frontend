import axios from 'axios';


const baseURL = process.env.REACT_APP_BACKEND_URL;
// let headers = {};

// const currentUser = JSON.parse(localStorage.getItem('user'));

// if (currentUser) {  
//     localStorage.setItem('token', currentUser["access-token"]);
//     headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
// }

const axiosInstance = axios.create({
    baseURL: baseURL,
    // headers,
});



// axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
// axiosInstance.interceptors.request.use(function (config) {
//   const authHeaders = JSON.parse(window.localStorage.getItem('authHeaders'))
//   if(authHeaders) {
//     config.headers[config.method] = {
//       'access-token': authHeaders['access-token'],
//       'client': authHeaders['client'],
//       'uid': authHeaders['uid']
//     }
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error)
// });

// axiosInstance.interceptors.response.use(function (response) {
//   if(response.headers['access-token']) {
//     const authHeaders = {
//       'access-token': response.headers['access-token'],
//       'client': response.headers['client'],
//       'uid': response.headers['uid'],
//       'expiry': response.headers['expiry'],
//       'token-type': response.headers['token-type']
//     }
//     window.localStorage.setItem('authHeaders', JSON.stringify(authHeaders));
//   } else {
//     window.localStorage.removeItem('authHeaders');
//   }
//   return response;
// }, function (error) {
//   return Promise.reject(error)
// });


export default axiosInstance;

