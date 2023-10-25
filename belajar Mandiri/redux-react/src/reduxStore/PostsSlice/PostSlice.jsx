import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
import {BiSolidUpArrow} from 'react-icons/bi'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import {GiLobArrow} from 'react-icons/gi'
const initialState={
    posts:[
        {
            id:1,
            title:"javaScript Fundamental courses in order to arraow function",
            img:"https://source.unsplash.com/random/?Game",
            date:new Date().toISOString(),
            reaction:[
                {
                    title:"Upvote",
                    icon:<BiSolidUpArrow className="text-lg" />,
                },
                {
                    title:"Comments",
                    icon:<BsFillChatRightTextFill className="text-lg" />
                },
                {
                    title:"Share",
                    icon:<GiLobArrow className="text-lg" />,
                }
            ]
        },
        {
            id:2,
            title:"javaScript Fundamental",
            img:"https://source.unsplash.com/random/?Cars",
            date:new Date().toISOString(),
            reaction:[
                {
                    title:"Upvote",
                    icon:<BiSolidUpArrow className="text-lg" />,
                },
                {
                    title:"Comments",
                    icon:<BsFillChatRightTextFill className="text-lg" />
                },
                {
                    title:"Share",
                    icon:<GiLobArrow className="text-lg" />,
                }
            ]
        },   {
            id:3,
            title:"javaScript Fundamental",
            img:"https://source.unsplash.com/random/?Programing",
            date:new Date().toISOString(),
            reaction:[
                {
                    title:"Upvote",
                    icon:<BiSolidUpArrow className="text-lg" />,
                },
                {
                    title:"Comments",
                    icon:<BsFillChatRightTextFill className="text-lg" />
                },
                {
                    title:"Share",
                    icon:<GiLobArrow className="text-lg" />,
                }
            ]
        },   {
            id:4,
            title:"javaScript Fundamental",
            img:"https://source.unsplash.com/random/?JavaScript",
            date:new Date().toISOString(),
            reaction:[
                {
                    title:"Upvote",
                    icon:<BiSolidUpArrow className="text-lg" />,
                },
                {
                    title:"Comments",
                    icon:<BsFillChatRightTextFill className="text-lg" />
                },
                {
                    title:"Share",
                    icon:<GiLobArrow className="text-lg" />,
                }
            ]
        },
    ]
}

const allPosts=createSlice({
    name:"allPosts",
    initialState,
    reducers:{},
    extraReducers:{}
})

export const getAllPost= state =>state.allPosts.posts
export default allPosts.reducer