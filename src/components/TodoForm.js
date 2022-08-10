import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../stores/TodoSlice'

const TodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const addNewTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      title: value
    }))
  }
  return (
    <div className='todo-form'>
      <h1>Todo App</h1>
      <form onSubmit={addNewTodo}>
        <input type="text" onInput={(e) => setValue(e.target.value)}/>
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm