import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './kounter'
import achievementsReducer from './Achievements'


export const store = configureStore({
    reducer: {
        kounter: counterReducer,
        achievements: achievementsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch