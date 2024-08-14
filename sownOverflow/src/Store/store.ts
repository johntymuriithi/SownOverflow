import { configureStore} from '@reduxjs/toolkit'
import userReducer from '@/Features/Users/usersSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type AppStore = typeof store
export type AppDispatch  = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>