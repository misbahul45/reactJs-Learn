import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./ApiTodo";
import { setupListeners } from "@reduxjs/toolkit/query";
import  daysSLice  from "./DaysSlice";

export const store=configureStore({
    reducer:{
        'days':daysSLice,
        [todoApi.reducerPath]:todoApi.reducer
    },
    middleware:(getDefaultMiddlewar)=>getDefaultMiddlewar().concat(todoApi.middleware)
})

setupListeners(store.dispatch)