import { createSlice } from "@reduxjs/toolkit";
const createRandom=createSlice({
    name:"random",
    initialState:{
        randomText:["ayo","kamu","makan"],
        index:0
    },
    reducers:{
        getRandomAction(state){
            state.index<state.randomText.length?state.index=state.index+=1:state.index=0
        }
    }
})
export const {getRandomAction}=createRandom.actions
export default createRandom.reducer