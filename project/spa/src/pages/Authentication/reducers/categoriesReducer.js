import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        mainCategories: [],
        subCategories: [],
        servicesCategories: []
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
        }
    }
});

export const { storeMainCategories, storeSubCategories, storeServices } = categoriesSlice.actions;

export default categoriesSlice.reducer;