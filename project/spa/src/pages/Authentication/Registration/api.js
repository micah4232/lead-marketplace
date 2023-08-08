import axios from '../../../axios';

export const RegisterAPI  = (usersCompany) => {
    return axios.post('auth/users/', usersCompany)
}

export const GetMainCategories = () => {
    return axios.get('company/main-category')
}

export const GetSubCategoriesByMainId = (id) => {
    return axios.get(`company/sub-category/${id}/`)
}