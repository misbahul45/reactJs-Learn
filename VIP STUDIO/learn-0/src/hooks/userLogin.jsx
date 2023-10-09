import { getUsername } from "../services/auth.service"
import { useState,useEffect } from "react"
export const useLogin=()=>{
    const [username,setUsername]=useState("")

    useEffect(()=>{
        const token=localStorage.getItem("token")
      if(token){
        setUsername(getUsername(token))
      }else{
        window.location.href="/login"
      }
    },[])
    return username
}