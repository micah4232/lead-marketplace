import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import authenticationSlice from './pages/Authentication/reducers/authenticationSlice'
import categoriesReducer from './pages/Authentication/reducers/categoriesReducer'
import storage from 'redux-persist/lib/storage'
import componentSlice from './components/reducers/componentSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    authentication: authenticationSlice,
    category: categoriesReducer,
    component: componentSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);