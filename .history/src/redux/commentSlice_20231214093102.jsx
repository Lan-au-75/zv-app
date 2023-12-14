import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        value: [],
    },
    reducers: {},
})

export default commentSlice.reducer
