import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getDetailProduct } from '../services/product.service'
const detailProduct = () => {
    const { id }=useParams()
    const [product,setProduct]=useState([])
    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    },[id])
    console.log(product)
  return (
    <div>detailProduct{id}</div>
  )
}

export default detailProduct