import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi=createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3500/"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"items"
        }),
    }),
});

export const {useGetAllProductsQuery} =productApi