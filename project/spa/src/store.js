import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import authenticationSlice from './pages/Authentication/reducers/authenticationSlice'
import categoriesReducer from './pages/Authentication/reducers/categoriesReducer'
import storage from 'redux-persist/lib/storage'
import componentSlice from './components/reducers/componentSlice';
import campaignSlice from './pages/Application/pages/Campaigns/reducers/campaignSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    authentication: authenticationSlice,
    category: categoriesReducer,
    component: componentSlice,
    campaign: campaignSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);