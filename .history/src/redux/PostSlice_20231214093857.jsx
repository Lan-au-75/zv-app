import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
})

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
