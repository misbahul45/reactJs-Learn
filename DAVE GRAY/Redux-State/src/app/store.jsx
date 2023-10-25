import {configureStore } from "@reduxjs/toolkit"
import counterSLice from "../features/counter/counterSLice"
import postSlice from "../features/Post/PostSlice/postSlice"
import userSlice from "../features/Post/PostSlice/users/userSlice"
export const store=configureStore({
    reducer:{
        counter:counterSLice,
        posts:postSlice,
        users:userSlice,
    }
})