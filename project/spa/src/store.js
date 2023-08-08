import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './pages/Authentication/reducers/authenticationSlice'


export default configureStore({
    reducer: {
        authentication: authenticationSlice
    }
})