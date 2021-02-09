import axios from 'axios';


const baseURL = "http://localhost:3001";
let headers = {};

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: headers,
});

export default axiosInstance;