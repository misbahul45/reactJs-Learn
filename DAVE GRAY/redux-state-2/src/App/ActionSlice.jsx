import { createSlice,createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const actionAdapter=createEntityAdapter({
  selectId:(action)=>action.id,
  sortComparer:(a,b)=>a.id-b.id
})

const initialState=actionAdapter.getInitialState({
    status:"idle",
    error:'',
    loading:false
})

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
        .addCase(getPost.fulfilled, (state, action) => {
          state.loading = false;
          actionAdapter.setAll(state, action.payload)
        })
        .addCase(addPost.fulfilled,(state,action)=>{
          actionAdapter.addOne(state, action.payload)
        })
        .addCase(updatePost.fulfilled,(state,action)=>{
          actionAdapter.updateOne(state, {id:action.payload.id, changes:action.payload})
        })
    },
  });
  
 export const { selectAll:getAllPost,selectById:getActionById }= actionAdapter.getSelectors((state)=>state.actions)

  export const filterActions=createSelector(
    [getAllPost, (state,userId)=>userId],
    (actions, userId) =>actions.filter(action=>action.userId===userId)
  )


export default ActionSlice.reducer
export const {post,updateActionsPost}=ActionSlice.actions