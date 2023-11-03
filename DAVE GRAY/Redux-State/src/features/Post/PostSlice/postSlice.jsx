import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import {sub} from 'date-fns'
import axios from 'axios'

const POSTS_URL='https://jsonplaceholder.typicode.com/posts'
const initialState={
    posts:[],
    status:'idle',
    error:null
}
export const fetchPosts=createAsyncThunk('posts/fetchPosts',async()=>{
        const response=await axios.get(POSTS_URL);
        return [...response.data]
})

export const addNewPost=createAsyncThunk('posts/addNewPosts',async(initialPost)=>{
    try{
        const response=await axios.post(POSTS_URL,initialPost);
        return response.data
    }catch(e){
        return e.message
    }
})


const postSlice =createSlice({
    name:'Posts',
    initialState,
    reducers:{
        postAdd:{
            reducer(state,actions){
                state.posts.push(actions.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reaction:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded:(state,actions)=>{
            const {postId,reaction}=actions.payload
            const existingpost=state.posts.find((post)=>post.id===postId)
            if(existingpost){
                existingpost.reaction[reaction]++
            }

        }
        
    },
    extraReducers(builder){
         builder
            .addCase(fetchPosts.pending,(state,actions)=>{
                state.status='loading'
            })
            .addCase(fetchPosts.fulfilled, (state,actions)=>{
                state.status='succeede'
                let min=1
                const loadedPostst=actions.payload.map((post)=>{
                    post.date=sub(new Date(), {minutes: min++}).toISOString()
                    post.reaction={
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }
                    return post
                })
                state.posts=state.posts.concat(loadedPostst)
            })
            .addCase(fetchPosts.rejected, (state,action)=>{
                state.status='failed',
                state.error=action.error.message
            })
            .addCase(addNewPost.fulfilled, (state,actions)=>{
                actions.payload.userId=Number(actions.payload.userId)
                actions.payload.date=new Date().toISOString()
                actions.payload.reaction={
                    thumbsUp:0,
                    wow:0,
                    heart:0,
                    rocket:0,
                    coffee:0
                }
                state.posts.push(actions.payload)
            })
    }
})

export const selectAllPosts=(state)=>state.posts.posts
export const getPostsStatus=(state)=>state.posts.status
export const getPostsError=(state)=>state.posts.error



export const {postAdd,reactionAdded}=postSlice.actions

export default postSlice.reducer