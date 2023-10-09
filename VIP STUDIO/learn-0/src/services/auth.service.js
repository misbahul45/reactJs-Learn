import axios from "axios";
import jwt_decode from "jwt-decode"
export const login=(data,callback)=>{
    axios.post('https://fakestoreapi.com/auth/login',data).then(Response=>{
        callback(true, Response.data.token)
    }).catch(error=>{
        callback(false,error)
    })
}
export const getUsername=(token)=>{
    const decoded=jwt_decode(token)
    console.log(decoded)
    return decoded.user
}