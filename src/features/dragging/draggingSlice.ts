import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
    mode: boolean
}

const initialState: ThemeState = {
    mode: false
}

export const draggingSlice = createSlice({
    name: 'draggable',
    initialState,
    reducers: {
        dragTrue: (state) => {
            state.mode = true
        },
        dragFalse: (state) => {
            state.mode = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { dragTrue, dragFalse } = draggingSlice.actions

export default draggingSlice.reducer