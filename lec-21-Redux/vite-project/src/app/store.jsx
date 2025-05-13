import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from "../features/counter/counterSlice"
import todoSliceReducer from "../features/todo/todoSlice"
export const store = configureStore({
    reducer:{
        counter:counterSliceReducer,
        todo: todoSliceReducer
    }
})