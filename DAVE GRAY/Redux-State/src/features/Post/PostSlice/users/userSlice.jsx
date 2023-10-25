import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL='https://jsonplaceholder.typicode.com/users'
const initialState=[] 

export const fecthUsers=createAsyncThunk('users/fetchUsers',async()=>{
    try{
        const res=await axios.get(USERS_URL)
        return [...res.data]
    }catch(e){
        return e.message   
    }
})

const userSlice =createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fecthUsers.fulfilled, (state,actions)=>{
            return actions.payload
        })
    }
})

export const selectAllUsers=(state)=>state.users
export default userSlice.reducer;