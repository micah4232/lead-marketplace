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

export const GetZipCode = (code, distance) => {
    return axios.get(`company/get-zipcode/${code}/${distance}/`)
}

export const GetServiceBySub = (id) => {
    return axios.get(`company/services/${id}/`)
}

export const GetCompanyIdByUser = (id) => {
    return axios.get(`company/get-company-id-by-user/${id}/`)
}

export const CreateCompanyZipCodeList = (payload) => {
    return axios.post('company/zipcode-list/', payload)
}

export const CreateBulkBid = (payload, company) => {
    let temp_data = payload;
    let data = []

    temp_data.map(obj => {
        data = [...data, {...obj, company: company, service: obj.value, price: parseFloat(parseInt(obj.price)).toFixed(2), zip_group: parseInt(obj.zipcode_group)}]
    });

    return axios.post('bid/bulk/create', { "bids": data })
}

export const UpdateCompany = (payload) => {
    return axios.patch(`company/${payload.id}/`,{...payload, phone_number_for_lead: payload.phone_number})
}

export const SaveCard = (pk) => {
    return axios.get(`payment/save-card/${pk}/`)
}