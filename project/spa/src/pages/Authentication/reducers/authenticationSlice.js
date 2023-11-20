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
    storeSetupCard
} = authenticationSlice.actions

export default authenticationSlice.reducer