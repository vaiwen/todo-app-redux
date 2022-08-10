import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import todoReducer from './TodoSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  }
})