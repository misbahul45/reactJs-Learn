import React from 'react'
import ProductHome from './prodctHome/ProductHome.jsx.jsx'
const DisplayProdcutHome = (props) => {
  const { products, index } = props
  const reversedProduct= [...products].reverse()
  return (
   <>
    <h1 className="text-3xl text-center text-slate-700 font-semibold">My Prodcuts</h1>
     <div className=" relative flex gap-2 overflow-x-scroll py-2 no-scrollbar">
      {
        index%4===0?
        reversedProduct.map((product) => (
          <ProductHome product={product} key={product.id} />
        ))
        :
        products.map((product) => (
          <ProductHome product={product} key={product.id} />
        ))
      }   
     </div>
   </>
  )
}

export default DisplayProdcutHome