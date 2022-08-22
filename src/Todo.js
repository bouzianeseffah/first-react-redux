import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearListe } from './features/TodoSlice'
function Todo() {
    const listeItems = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = listeItems.map((listeItem, index) => {
        return (
           <li key={index} onClick={() => dispatch(removeItem(index))}>
             {listeItem}
            </li>
        );
          
    })
     

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addItem(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearListe())}>Clear</button>
        </div>
    )
}

export default Todo