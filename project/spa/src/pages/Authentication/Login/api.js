import axios from '../../../axios';

export const LoginAPI = (email, password) => {
    let data = {
        username: email,
        password: password
    }
    return axios.post('auth/token/login/', data)
}