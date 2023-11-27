import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {

    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token');
        // console.log('intercepting every request', token);
        config.headers.authorization = `Bearer ${token}`;

        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);

        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await signOutUser();
            navigate('/login');
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;