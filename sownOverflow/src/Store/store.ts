import { configureStore} from '@reduxjs/toolkit'
import userReducer from '@/Features/Users/usersSlice'
import questionsReducer from '@/Features/Questions/questionsSlice'
import statsReducer from '@/Features/Stats/statsSlice'
import categoriesReducer from '@/Features/Categories/categoriesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionsReducer,
        stats: statsReducer,
        categories: categoriesReducer
    }
})

export type AppStore = typeof store
export type AppDispatch  = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>