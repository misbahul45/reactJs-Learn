import axios from "axios";
export const getProduct=(callback)=>{
    axios.get('https://fakestoreapi.com/products').then(Response=>{
        callback(Response.data)
    }).catch(error=>{
        console.log(error)
    })
}
export const getDetailProduct=(id,callback)=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(Response=>{
        callback(Response.data)
    }).catch(error=>{
        console.log(error)
    })
}
 
