import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    posts:[
        {
            id:nanoid(),
            title:"javascript",
            body:"body js",
            date:new Date().toISOString(),
            img:`https://source.unsplash.com/random/?Javascript}`,
            reaction:[
                        {
                            title:"Upvote",
                            amount:0
                        },
                        {
                            title:"Comments",
                            amount:0
                        },
                        {
                            title:"Share",
                            amount:0
                        }
                    ]
        }
    ]
}

const allPosts=createSlice({
    name:"allPosts",
    initialState,
    reducers:{
       addPost:{
        reducer(state,actions){
            state.posts.push(actions.payload)
        },
        prepare(title,body,img){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    body,
                    date:new Date().toISOString(),
                    img:`https://source.unsplash.com/random/?${img}`,
                    reaction:[
                        {
                            title:"Upvote",
                            amount:0
                        },
                        {
                            title:"Comments",
                            amount:0
                        },
                        {
                            title:"Share",
                            amount:0
                        }
                    ]
                    
                }
            }
        }
       },
       addReactions:(state,actions)=>{
        state.posts.map((post)=>{
            post.reaction.map((react)=>{
                if(react.title===actions.payload){
                    react.amount===0?react.amount+=1:react.amount-=1
                }
            })
        })
       }
    },
    extraReducers:{}
})

export const {addPost,addReactions}=allPosts.actions
export const getAllPost= state=>state.allPosts.posts
export const getAllReactions=state=>state.allPosts.posts.reaction
export default allPosts.reducer