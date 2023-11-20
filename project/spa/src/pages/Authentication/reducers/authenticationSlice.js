import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name : 'authentication',
    initialState: {
        user: {
            'first_name' : '',
            'last_name' : '',
            'email' : '',
            'username' : '',
        },
        company: {
            'name' : '',
            'website' : '',
            'phone_number' : '',
            'enable_calls_to_number' : false
        },
        token: '',
        zipCodeList: [],
        isRegistering: false,
        isVerified: false,
        step: 0,
        isLoggedIn: false,
        setupCard: false
    },
    reducers: {
        storeLoggedIn: (state, action) => {
            state.isLoggedIn = action.action
        },
        storeCompanyZipCode: (state, action) => {
            state.companyZipCode.push(action.payload)
        },
        storeUser: (state, action) => {
            state.user = action.payload
        },
        storeCompany : (state, action) => {
            state.company = action.payload
        },
        storeIsRegistering: (state, action) => {
            state.isRegistering = action.payload
        },
        storeIsVerified: (state, action) => {
            state.isVerified = action.payload;
        },
        storeStep: (state, action) => {
            state.step = action.payload;
        },
        storeZipCodeList: (state, action) => {
            state.zipCodeList = [...state.zipCodeList, action.payload];
        },
        storeSetupCard: (state, action) => {
            state.setupCard = action.payload
        },
        storeToken: (state, action) => {
            state.token = action.payload
        },
        resetAuth: (state) => {
            state = {
                ...state,
                user: {
                    'first_name' : '',
                    'last_name' : '',
                    'email' : '',
                    'username' : '',
                },
                company: {
                    'name' : '',
                    'website' : '',
                    'phone_number' : '',
                    'enable_calls_to_number' : false
                },
                token: '',
                zipCodeList: [],
                isRegistering: false,
                isVerified: false,
                step: 0,
                isLoggedIn: false,
                setupCard: false
            }
        }
    }
});

export const { 
    storeUser, 
    storeCompany, 
    storeIsRegistering, 
    storeIsVerified, 
    storeStep,
    storeZipCodeList,
    storeCompanyZipCode,
    storeLoggedIn,
    storeSetupCard,
    storeToken,
    resetAuth,
} = authenticationSlice.actions

export default authenticationSlice.reducer