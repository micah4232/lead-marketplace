import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        mainCategories: [],
        subCategories: [],
        servicesCategories: [],
        selectedMain: null,
        selectedSub: null,
        selectedServices: [],
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
            const selected_length = state.selectedServices.length
            if (action.payload.length > selected_length) {
                state.selectedServices = [...state.selectedServices, {...action.payload[action.payload.length - 1], price: '', zip_group: ''}]
            } else {
                state.selectedServices = action.payload
            }
        },
        onChangePrice: (state, action) => {
            state.selectedServices[action.payload.index] = { ...state.selectedServices[action.payload.index], price : action.payload.value }
        },
        onChangeZipGroup: (state, action) => {
            state.selectedServices[action.payload.index] = { ...state.selectedServices[action.payload.index], zip_group : action.payload.value }
        },
        resetCategories: (state) => {
            state.mainCategories = []
            state.subCategories = []
            state.servicesCategories = []
            state.selectedMain = null
            state.selectedSub = null
            state.selectedServices = []
        }
    }
});

export const { 
    storeMainCategories, 
    storeSubCategories, 
    storeServices, 
    storeSelectedSub, 
    storeSelectedMain,
    storeSelectedServices,
    onChangePrice,
    onChangeZipGroup,
    resetCategories
} = categoriesSlice.actions;

export default categoriesSlice.reducer;