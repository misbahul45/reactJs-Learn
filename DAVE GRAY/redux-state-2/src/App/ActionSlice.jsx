import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    status:"idle",
    actions:[],
    eror:'',
    loading:false
}

export const getPost=createAsyncThunk('actions/actions',async()=>{
    const respon=await axios.get("http://localhost:3500/items")
    return respon.data
})
export const addPost=createAsyncThunk('actions/addPost',async(newData)=>{
  const response=await axios.post("http://localhost:3500/items",newData)
  return response.data
})
export const updatePost=createAsyncThunk('actions/update',async(initialPost)=>{
    const id=initialPost.id
    const respon=await axios.put(`http://localhost:3500/items/${id}`,initialPost)
    return respon.data
})

const ActionSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPost.pending, (state) => {
          state.loading = true;
        })
        .addCase(getPost.fulfilled, (state, value) => {
          state.loading = false;
          state.actions = value.payload;
        })
        .addCase(addPost.fulfilled,(state,value)=>{
          state.actions.push(value.payload)
        })
        .addCase(updatePost.fulfilled,(state,value)=>{
          const newdata=value.payload
          state.actions = state.actions.map((item) =>
          item.id === newdata.id ? { ...item, name: newdata.name, keterangan: newdata.keterangan } : item
          )
        })
    },
  });
  
  export const getAllPost=(state)=>state.actions.actions

export default ActionSlice.reducer
export const {post,updateActionsPost}=ActionSlice.actions