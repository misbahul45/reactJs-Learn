import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cars:["Model S","Model Y","Model 3","Model X"],
}
const carSLice=createSlice({
    name:"car",
    initialState,
    reducers:{}
})
   
export const SelectCars= state => state.car.cars
export default carSLice.reducer