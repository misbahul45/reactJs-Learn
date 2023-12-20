import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState=[
    {
        userId:1,
        name:"Misbahul"
    },
    {
        userId:2,
        name:"Muttaqin"
    },
    {
        userId:3,
        name:"Knixxen"
    },
    {
        userId:4,
        name:"Xninetzy"
    }
]

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducer:{}
})
export default UserSlice.reducer

