import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice.jsx'
export default configureStore({
    reducer: {
        posts: postReducer,
    },
})
