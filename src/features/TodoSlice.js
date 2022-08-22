
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}
export const todoSlice = createSlice({
    name: 'todoListe',
    initialState,
    reducers: {
        addItem: (state, action) => {
            return {items: [...state.items, action.payload]}
        },
        removeItem: (state, action) => {
            let array = [...state.items]
            let index = action.payload
            if( index !== -1) {
                array.slice(index, 1)
                return {items: array}
            }
        },
        clearListe: () => {
            return {items: []}
        }
    }

})
export const {addItem, removeItem, clearListe} = todoSlice.actions

export default todoSlice.reducer