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
            'phone_number' : ''
        },
        zipCodeList: [],
        isRegistering: false,
        isVerified: false,
        step: 0
    },
    reducers: {
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
            state.zipCodeList = action.payload
        }
    }
});

export const { storeUser, storeCompany, storeIsRegistering, storeIsVerified, storeStep } = authenticationSlice.actions

export default authenticationSlice.reducer