import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi=createApi({
    reducerPath:"todoApi",
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:3500/"}),
    tagTypes:["Todo"],
    endpoints:(builder)=>({
        getAllTodo:builder.query({
            query:()=>"todo",
            providesTags:["Todo"]
        }),
        addTodo: builder.mutation({
            query: (todo)=>({
                url:"todo",
                method:"POST",
                body:todo
            }),
            invalidatesTags:["Todo"]
        }),
        handleFinished:builder.mutation({
            query: (todo)=>({
                url:`todo/${todo.id}`,
                method:"PATCH",
                body:todo
            }),
            invalidatesTags:["Todo"]
        }),
        handleDelete:builder.mutation({
            query: ({id})=>({
                url:`todo/${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:["Todo"]
        })
    })
})
export const { useGetAllTodoQuery,
    useAddTodoMutation,
    useHandleFinishedMutation,
    useHandleDeleteMutation }=todoApi