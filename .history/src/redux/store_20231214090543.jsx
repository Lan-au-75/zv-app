import { configureStore } from '@reduxjs/toolkit'
import postReducer from './PostSlice'

export default configureStore({
    reducer: {
        posts: postReducer,
    },
})
