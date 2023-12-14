import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import commentReducer from './commentSlice'
import usersReducer from './usersSlice'

export default configureStore({
    reducer: {
        posts: postReducer,
        comments: commentReducer,
        users: usersReducer,
    },
})
