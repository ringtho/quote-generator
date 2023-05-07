import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: 'colors',
    initialState: {
        color: ''
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        }
    }
})

export const {changeColor} = colorSlice.actions
export default colorSlice.reducer