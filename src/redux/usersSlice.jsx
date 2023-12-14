import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: [],
    },
    reducers: {},
})

export default usersSlice.reducer
