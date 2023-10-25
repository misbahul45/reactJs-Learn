import postSlice from './PostsSlice/postSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer:{
        'allPosts':postSlice,
    }
})
