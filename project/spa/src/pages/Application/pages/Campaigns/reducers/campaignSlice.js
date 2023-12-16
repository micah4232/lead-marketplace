import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaigns: [],
        zipCodeGroup: []
    },
    reducers: {
        storeCampaigns: (state, action) => {
            state.campaigns = action.payload
        },
        storeZipCodeGroup: (state, action) => {
            state.zipCodeGroup = action.payload
        }
    }
})

export const {
    storeCampaigns,
    storeZipCodeGroup
} = campaignSlice.actions

export default campaignSlice.reducer