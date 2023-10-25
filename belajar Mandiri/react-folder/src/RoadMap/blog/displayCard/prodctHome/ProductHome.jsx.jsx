import React from 'react'

const ProductHome = (props) => {
    const { product } = props
  return (
    <div className="flex flex-col gap-1 w-full min-w-[240px] bg-gray-50 px-5 py-3 shadow-md rounded-xl">
        <img src={product.img} className="w-full  rounded-lg" />
        <h1 className="text-2xl font-semibold font-mono">{product.name}</h1>
        <h2>{product.price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</h2>
        <button className=" relative px-5 py-2 bg-green-600 text-white rounded-md z-20 hover:bg-green-900 transition-all duration-500 ease-in-out group">Buy Books</button>
    </div>
  )
}

export default ProductHome