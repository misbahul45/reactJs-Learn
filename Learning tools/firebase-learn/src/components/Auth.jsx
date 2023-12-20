import React, { useState } from 'react'
import { auth, goggleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth'
const Auth = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const signIn=async()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(e){
            console.log(e)
        }
        setEmail('')
        setPassword('')
    }
    const signInWithGoggle=async()=>{
        try{
            await signInWithPopup(auth, goggleProvider)
        }catch(e){
            console.log(e)
        }
    }
    const logout=async()=>{
        try{
            await signOut(auth)
        }catch(e){
            console.log(e)
        }
    }
    console.log(auth?.currentUser?.email)
  return (
    <main>
      <h1 className="text-5xl font-semibold text-blue-700 text-center my-6">Please Login</h1>
      <div className="flex flex-col w-full max-w-sm px-5 py-7 border-2 border-blue-700 rounded-lg mx-auto">
        <input
          className="pl-5 py-1 border-2 border-blue-600 rounded-md  outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email...." type="email" name="email" id="" />
        <input
          className=" mt-3 pl-5 py-1 border-2 border-blue-600 rounded-md  outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password..." />
        <button
          className="bg-green-500 py-2 mt-5 rounded-md text-white font-bold"
         onClick={(signIn)}>Sign in</button>
        <button
          className="bg-orange-500 py-2 mt-5 rounded-md text-white font-bold"
        onClick={signInWithGoggle}>Sign In With Goggle</button>
        <button 
          className="bg-red-500 py-2 mt-5 rounded-md text-white font-bold"
        onClick={logout}>Log out</button>
      </div>
    </main>
  )
}

export default Auth
