import { createSlice } from "@reduxjs/toolkit";

export const componentSlice = createSlice({
    name: 'component',
    initialState: {
        alert: {
            show: true,
            alert: 'error',
            message: 'message'
        }
    },
    reducers: {
        onAlertShow : (state, action) => {
            state.alert = { ...action.payload, show: true }
        },
        onAlertClose : (state) => {
            state.alert = {show: false, alert: '', message: ''}
        }
    }
})

export const {
    onAlertShow,
    onAlertClose
} = componentSlice.actions

export default componentSlice.reducer