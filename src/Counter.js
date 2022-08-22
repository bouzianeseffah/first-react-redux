import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount  } from './features/ConterSlice'

function Counter ()  {
    const byAmountsubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
    //call useSelector to grab the current value of our state variable
    //from the store and assign it to a variable named count
    const count = useSelector((state) => state.value)
    //and include the useDispatch hook
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)
    return(
      <div>
        <h1>{count}</h1>
       <button onClick={() => dispatch(increment())}>
          Increment
       </button>
       <button onClick={() => dispatch(decrement())}>
          Decriment
       </button>
       <form onSubmit={(e) => byAmountsubmit(e)}>
        <input type='number' onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Submit</button>
       </form>

      </div>
    )
}
export default Counter