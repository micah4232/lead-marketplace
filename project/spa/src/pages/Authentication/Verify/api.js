import axios from '../../../axios';

export const ActivateAccount = (uid, token) => {
    return axios.post('auth/users/activation/', {uid: uid, token: token})
}