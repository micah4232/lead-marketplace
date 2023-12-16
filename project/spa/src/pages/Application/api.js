import axios from '../../axios';

const headers = (token) => {
    return {
        Authorization: `Token ${token}`,
    }
}

export const getProfileMe = (token) => {
    return axios.get(`auth/users/me/`, {
        headers: headers(token)
    })
}