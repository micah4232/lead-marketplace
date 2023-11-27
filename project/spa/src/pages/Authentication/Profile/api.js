import { useSelector } from 'react-redux';
import axios from '../../../axios';


const headers = (token) => {
    return {
        Authorization: `Token ${token}`,
    }
}

export const getProfile = (token) => {
    return axios.get(`company/my-profile/`, {
        headers: headers(token)
    })
}