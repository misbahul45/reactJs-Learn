import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../ReduxActions/CounterSlice";
export const store=configureStore(
    {
        reducer:{
            counter:CounterSlice
        }
    }
)
