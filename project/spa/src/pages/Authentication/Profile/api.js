import { useSelector } from 'react-redux';
import axios from '../../../axios';


const headers = (token) => {
    return {
        Authorization: `Token ${token}`,
        'Access-Control-Allow-Origin' : window.location.origin,
    }
}

export const getProfile = (token) => {
    return axios.get(`company/my-profile/`, {
        headers: headers(token)
    })
}