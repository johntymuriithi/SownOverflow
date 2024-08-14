import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { User } from "@/Types/usersTypes";
import { RootState } from "@/Store/store";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

interface Data {
    email: string;
    pass: string;
}

const data: Data = { email: "mwangijohnmuriithi@gmail.com", pass: '1234' };

// Define the initial state with the correct typing
const initialState: {
    user: User;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
} = {
    user: {
        username: 'john',
        email: 'muriithijohn@gmial.com',
        token: 'knmfkdnvkdfnlvjnjvndkvng',
    },
    status: 'idle',
    error: null,
};

export const loginUser = createAppAsyncThunk<User, void>('user/loginUser', async () => {
    const response = await fetch('api/user/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    return await response.json();
});

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to login';
            });
    },
});

export default usersSlice.reducer;

// Selector to get the user info from the state
export const getUserInfo = (state: RootState) => state.user