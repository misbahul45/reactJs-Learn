import { createSlice } from "@reduxjs/toolkit";

const initialState=["senin","selasa","rabu","kamis","jum'at","sabtu","minggu"];

const daysSLice=createSlice({
    name:"days",
    initialState,
    reducers:{}
})

export const getAllDays=(state)=>state.days

export default daysSLice.reducer

