import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}

const CounterSlice =createSlice({
    name:"CounterSlice",
    initialState,
    reducers:{
        increment:(state)=>{
             state.value++
        },
        decrement:(state)=>{
             state.value--
        },
        reset:(state)=>{
             state.value=0
        }
    }   
})
export const {increment,decrement,reset}=CounterSlice.actions
export default CounterSlice.reducer