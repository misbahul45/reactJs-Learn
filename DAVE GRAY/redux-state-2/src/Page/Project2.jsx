import React from 'react'
import { productApi, useGetAllProductsQuery } from '../App/ProductSLice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
const Project2 = () => {
    const {data}=useGetAllProductsQuery()
    console.log(data)
  return (
   <ApiProvider api={productApi}>
        <div className="bg-slate-800 min-h-screen">
        </div>
   </ApiProvider>
  )
}

export default Project2
