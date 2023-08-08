import axios from '../../../axios';

export const RegisterAPI  = (usersCompany) => {
    return axios.post('auth/users/', usersCompany)
}