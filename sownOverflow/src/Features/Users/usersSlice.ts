import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { Logins, SignUp, User } from "@/Types/usersTypes";
import { RootState } from "@/Store/store";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const initialState: {
    user: User | null
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    isActive: boolean
    error: string | null;
} = {
    user: null,
    isActive: true,
    status: 'idle',
    error: null,
};

export const loginUser = createAppAsyncThunk('user/loginUser', async (data: Logins) => {
    const response = await fetch('api/user/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const info = await response.json()
    return info.data
});

export const signUser = createAppAsyncThunk('user/signUser', async (data: SignUp) => {
    await fetch('api/user/signUp', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
});

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isActive = true;
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                state.error = '';
                state.isActive = false
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to login';
            });
    },
});

export const { logOut } = usersSlice.actions
export default usersSlice.reducer;
export const getUserInfo = (state: RootState) => state.user