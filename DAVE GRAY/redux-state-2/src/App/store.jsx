import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ActionSlice from "./ActionSlice";
import UserSlice from "./UserSlice";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { productApi } from "./ProductSLice";
export const ReduxStore=configureStore(({
    reducer:{
        'actions':ActionSlice,
        'user':UserSlice,
        [productApi.reducerPath]:productApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
      return getDefaultMiddleware().concat(productApi.middleware)
    }
}))
