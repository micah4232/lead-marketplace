import axios from '../../axios';

const headers = (token) => {
    return {
        Authorization: `Token ${token}`,
        'Access-Control-Allow-Origin' : window.location.origin,
    }
}

export const getProfileMe = (token) => {
    return axios.get(`auth/users/me/`, {
        headers: headers(token)
    })
}