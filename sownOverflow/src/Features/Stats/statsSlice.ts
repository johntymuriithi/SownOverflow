import { RootState } from "@/Store/store";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { Stats } from "@/Types/statsTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state according to the Stats interface
const initialState: Stats = {
    users: 0,
    questions: 0
};

// Define the async thunk for fetching site info
export const getSiteInfo = createAppAsyncThunk(
    'stats/getSiteInfo', 
    async (): Promise<Stats> => {
        const response = await fetch('api/show/siteinfo');
        return await response.json();
    }
);

// Create the slice
const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSiteInfo.fulfilled, (state, action: PayloadAction<Stats>) => {
                return action.payload
                // Update the state with the fetched data when the promise resolves
            })
    },
});

export default statsSlice.reducer;

// Selector to get site info from the Redux store
export const getInfoSite = (state: RootState) => state.stats;
