import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './PostSlice'

export default configureStore({
    reducer: {
        post: PostReducer,
    },
})
