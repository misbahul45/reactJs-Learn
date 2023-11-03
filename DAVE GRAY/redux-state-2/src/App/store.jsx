import { configureStore } from "@reduxjs/toolkit";
import ActionSlice from "./ActionSlice";

export const ReduxStore=configureStore(({
    reducer:{
        'actions':ActionSlice
    }
}))