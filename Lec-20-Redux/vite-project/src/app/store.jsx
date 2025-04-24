import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from "../features/counter/counterSlice"
export const store = configureStore({
    reducer:{
        counter:counterSliceReducer
    }
})