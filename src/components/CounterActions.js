import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { decrement, increment } from '../stores/CounterSlice'

const CounterActions = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default CounterActions