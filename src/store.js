import { configureStore } from "@reduxjs/toolkit";
import conterReducer from './features/ConterSlice'
import TodoReducer from "./features/TodoSlice";
export const store = configureStore({
    reducer: conterReducer,
    todos: TodoReducer
    
})