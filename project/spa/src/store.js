import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './pages/Authentication/reducers/authenticationSlice'
import categoriesReducer from './pages/Authentication/reducers/categoriesReducer'


export default configureStore({
    reducer: {
        authentication: authenticationSlice,
        category: categoriesReducer,
    }
});