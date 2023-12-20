import { create } from "zustand";


export const useCounter=create((set)=>{
    return{
        counter:0,
        Adding:()=>set((state)=>({counter:state.counter+1})),
        Minus:()=>set((state)=>({counter:state.counter-1})),
    }
})