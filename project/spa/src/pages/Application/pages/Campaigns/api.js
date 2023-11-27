import axios from '../../../../axios';

const headers = (token) => {
    return {
        Authorization: `Token ${token}`,
        'Access-Control-Allow-Origin' : window.location.origin,
    }
}

export const getCampaignList = (token, pk) => {
    return axios.get(`bid/list/${pk}/`, {
        headers: headers(token)
    })
}

export const getListZipCodeGroupCompany = (token, pk) => {
    return axios.get(`company/zip-code-group/${pk}/`, {
        headers: headers(token)
    })
}