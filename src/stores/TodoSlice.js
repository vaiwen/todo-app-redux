import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: uuidv4(), title: "todo1", completed: false },
    { id: uuidv4(), title: "todo2", completed: false },
    { id: uuidv4(), title: "todo3", completed: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },

    toogleTodo: (state, aciton) => {
      const index = state.findIndex(todo => todo.id === aciton.payload.id)
      state[index].completed = aciton.payload.completed
      // state[index].completed = !state[index].completed
      console.log(aciton.payload.completed)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toogleTodo } = todoSlice.actions

export default todoSlice.reducer