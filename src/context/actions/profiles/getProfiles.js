import axiosInstance from "../../../helpers/axios"

/* eslint-disable import/no-anonymous-default-export */
export default() => {
    const currentUser = localStorage.getItem('user');

    axiosInstance
        // .get('/profiles', {withCredentials: true})
        .get('/profiles', {headers: JSON.parse(currentUser)})
        .then(res => { console.log("data", res.data)})
        .catch(err => { console.log("errors", err) })
}