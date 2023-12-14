import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        value: [],
    },
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default UsersSlice.reducer
