
import axiosInstance from './../../helpers/axios';

export const signup = () => {
    axiosInstance
    .post('/auth')
    .then((res) => console.log("res", res))
    .catch((err) => console.log("err",err))
}