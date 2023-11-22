import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaigns: []
    },
    reducers: {
        storeCampaigns: (state, action) => {
            state.campaigns = action.payload
        }
    }
})

export const {
    storeCampaigns,
} = campaignSlice.actions

export default campaignSlice.reducer