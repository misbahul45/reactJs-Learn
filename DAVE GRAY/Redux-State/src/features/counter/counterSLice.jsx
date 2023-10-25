import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) =>{
      state.count=0
    },
    incrementByAMount:(state,actions)=>{
      state.count+=actions.payload
    }
  },
});

export const { increment, decrement, reset, incrementByAMount } = counterSlice.actions;

export default counterSlice.reducer;
