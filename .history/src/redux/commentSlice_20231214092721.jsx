import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        value: [],
    },
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default commentSlice.reducer
