import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        mainCategories: [],
        subCategories: [],
        servicesCategories: [],
        selectedMain: null,
        selectedSub: null,
        selectedServices: []
    },
    reducers: {
        storeMainCategories: (state, action) => {
            state.mainCategories = action.payload;
        },
        storeSubCategories: (state, action) => {
            state.subCategories = action.payload;
        },
        storeServices: (state, action) => {
            state.servicesCategories = action.payload;
        },
        storeSelectedSub: (state, action) => {
            state.selectedSub = action.payload;
        },
        storeSelectedMain: (state, action) => {
            state.selectedMain = action.payload;
        },
        storeSelectedServices: (state, action) => {
            state.selectedServices = action.payload;
        }
    }
});

export const { 
    storeMainCategories, 
    storeSubCategories, 
    storeServices, 
    storeSelectedSub, 
    storeSelectedMain,
    storeSelectedServices
} = categoriesSlice.actions;

export default categoriesSlice.reducer;