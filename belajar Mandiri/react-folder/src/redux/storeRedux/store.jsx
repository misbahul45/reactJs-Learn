import { configureStore } from "@reduxjs/toolkit";
import createRandom from "../randomAction/createRandom";
 const store=configureStore({
    reducer:{
        createRandom:createRandom
    }
 })
 export default store