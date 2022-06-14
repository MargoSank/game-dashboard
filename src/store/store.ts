import { configureStore } from '@reduxjs/toolkit'
import {gamesSliceReducer} from "./gamesSlice";

export const store = configureStore({
    reducer: {
        gamesSlice: gamesSliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>