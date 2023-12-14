import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        value: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('posts', JSON.stringify(state.items))
        },
        removePost: (state, action) => {
            state.items = state.items.filter((post) => post.id !== action.payload)
            localStorage.setItem('posts', JSON.stringify(state.items))
        },
    },
})

export const { addPost, removePost } = postSlice.actions
export default postSlice.reducer
