import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "@/Types/hooksTypes";
import { RootState } from "@/Store/store";
import { Question, Questions } from '../../Types/questionsTypes';

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
    console.log(data.questions)
    return data.questions
});

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
                console.log(action.payload)
                state.questions = action.payload;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch questions';
            });
    },
});

export default questionsSlice.reducer;

// Selector to get all questions from the state
export const getAllQuestions = (state: RootState) => state.questions.questions;
export const getQuestionById = (state: RootState, id: number) => 
    state.questions.questions.find(question => question.id === id)
