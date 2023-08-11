import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import authenticationSlice from './pages/Authentication/reducers/authenticationSlice'
import categoriesReducer from './pages/Authentication/reducers/categoriesReducer'
import sessionStorage from 'redux-persist/es/storage/session';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    authentication: authenticationSlice,
    category: categoriesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);