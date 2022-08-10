import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toogleTodo } from '../stores/TodoSlice'

const TodoItem = ({ id, title, completed }) => {
    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo({
            id: id
        }))
    }

    useEffect(() => {
        console.log(completed)
        completed ? inputRef.current.style.backgroundColor = "lightgreen"
            : inputRef.current.style.backgroundColor = "white"
    }, [completed])

    const handleToggle = () => {
        dispatch(toogleTodo({
            id: id,
            completed: !completed
        }))
    }

    return (
        <li ref={inputRef} className='todo-item'>
            <div>
                <input type="checkbox" defaultChecked={completed} onChange={handleToggle} />
                <p>{title}</p>
            </div>
            <div onClick={handleDelete} className='delete-todo'>DELETE</div>
        </li>
    )
}

export default TodoItem