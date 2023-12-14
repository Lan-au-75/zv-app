import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        value: [],
    },
    reducers: {},
})

export default postSlice.reducer
