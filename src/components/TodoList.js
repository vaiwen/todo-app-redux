import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux/es/exports'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    return (
        <div className='todo-list'>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList