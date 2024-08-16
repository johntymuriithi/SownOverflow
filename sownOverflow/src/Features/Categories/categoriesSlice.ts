import { RootState } from "@/Store/store";
import { Categories, Category } from "@/Types/categoriesTypes";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Categories = {
    categories: [],
    status: 'idle',
    error: null
}

export const fetchCategories = createAppAsyncThunk(
    'categories/fetchCategories', async(): 
    Promise<Category[]> => {
        const response = await fetch('api/show/categories')
        return await response.json()
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
            state.status = 'succeeded'
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message || "Failed to fetch categories"
        })
    }
})

export default categoriesSlice.reducer
export const getCategories = (state: RootState) => state.categories