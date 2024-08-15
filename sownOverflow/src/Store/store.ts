import { configureStore} from '@reduxjs/toolkit'
import userReducer from '@/Features/Users/usersSlice'
import questionsReducer from '@/Features/Questions/questionsSlice'
import statsReducer from '@/Features/Stats/statsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionsReducer,
        stats: statsReducer,
    }
})

export type AppStore = typeof store
export type AppDispatch  = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>