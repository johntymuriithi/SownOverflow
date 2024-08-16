import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { RootState } from "@/Store/store";
import { Question, Questions } from '../../Types/questionsTypes';
import { Answer, DeleteAnswer, EditAnswer } from "@/Types/answersTypes";

// Define the initial state with the correct typing
const initialState: Questions = {
    questions: [],
    status: 'idle',
    error: null,
};



export const getQuestions = createAppAsyncThunk<Question[], void>('question/getQuestions', async () => {
    const response = await fetch('api/show/questions');

    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }

    const data = await response.json();
    return data.questions
});

export const fetchByCategory = createAppAsyncThunk(
    'question/fetchByCategory', 
    async(categoryName: string): Promise<Question[]> => {
        const response = await fetch(`api/show/questions/byCategory?categoryname=${categoryName}`)
        const data = await response.json();
        return data.questions
})

export const fetchUserQuestions = createAppAsyncThunk(
    'question/fetchUserQuestions', 
    async(token: string): Promise<Question[]> => {
        const response = await fetch('api/show/user/questions', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data.questions
})

export const fetchUserComments = createAppAsyncThunk(
    'question/fetchUserComments', 
    async(token: string): Promise<Question[]> => {
        const response = await fetch('api/show/user/answers', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data.questions
})

export const postAnswer = createAppAsyncThunk(
    'question/postAnswer', 
    async (data: Answer, { rejectWithValue }) => {
        const { token, ...rest } = data;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        try {
            const response = await fetch('http://localhost:5173/api/post/answer', {
                method: 'POST',
                headers,
                body: JSON.stringify(rest),
            });

            if (!response.ok) {
                // If the response status is not ok, throw an error with the status text
                throw new Error(response.statusText);
            }

            // Parse and return the JSON response
            return await response.json();
        } catch (error) {
            // Use rejectWithValue to pass a custom error message to the action's rejected case
            return rejectWithValue((error as Error).message);
        }
    }
);

export const editAnswer = createAppAsyncThunk(
    'question/editAnswer', 
    async (data: EditAnswer, { rejectWithValue }) => {
        const { token, ...rest } = data;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        try {
            const response = await fetch('http://localhost:5173/api/answer/edit', {
                method: 'POST',
                headers,
                body: JSON.stringify(rest),
            });

            if (!response.ok) {
                // If the response status is not ok, throw an error with the status text
                throw new Error(response.statusText);
            }

            // Parse and return the JSON response
            return await response.json();
        } catch (error) {
            // Use rejectWithValue to pass a custom error message to the action's rejected case
            return rejectWithValue((error as Error).message);
        }
    }
);

export const deleteAnswer = createAppAsyncThunk(
    'question/deleteAnswer', 
    async (data: DeleteAnswer, { rejectWithValue }) => {
        const { token, ...rest } = data;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        try {
            const response = await fetch('http://localhost:5173/api/answer/delete', {
                method: 'POST',
                headers,
                body: JSON.stringify(rest),
            });

            if (!response.ok) {
                // If the response status is not ok, throw an error with the status text
                throw new Error(response.statusText);
            }

            // Parse and return the JSON response
            return await response.json();
        } catch (error) {
            // Use rejectWithValue to pass a custom error message to the action's rejected case
            return rejectWithValue((error as Error).message);
        }
    }
);

const questionsSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.status = 'succeeded';
                state.questions = action.payload;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch questions';
            })
            .addCase(fetchByCategory.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.status = 'succeeded';
                state.questions = action.payload;
            })
            .addCase(fetchUserQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.status = 'succeeded';
                state.questions = action.payload;
            })
            .addCase(fetchUserComments.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.status = 'succeeded';
                state.questions = action.payload;
            })
    },
});

export default questionsSlice.reducer;

// Selector to get all questions from the state
export const getAllQuestions = (state: RootState) => state.questions.questions;
export const getQuestionById = (state: RootState, id: number) => 
    state.questions.questions.find(question => question.id === id)
