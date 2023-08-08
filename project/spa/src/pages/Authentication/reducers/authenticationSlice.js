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
        }
    },
    reducers: {
        storeUser: (state, action) => {
            state.user = action.payload
        },
        storeCompany : (state, action) => {
            state.company = action.payload
        }
    }
});

export const { storeUser, storeCompany } = authenticationSlice.actions

export default authenticationSlice.reducer