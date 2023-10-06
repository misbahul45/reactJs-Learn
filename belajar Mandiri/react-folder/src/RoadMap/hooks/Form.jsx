import React, { Fragment, forwardRef } from 'react'
import { useState,useRef,useEffect } from 'react'
const HomeForm= () => {
  const [login,setLogin]=useState("login")
  const dataUser=useRef([])
  const firstActifRef=useRef()
    
  useEffect(()=>{
    firstActifRef.current.focus()
    const storedAccount=JSON.parse(localStorage.getItem("dataUser"))||[]
    dataUser.current=storedAccount
  },[])
  const handleLoginSignUp=()=>{
    login==="login"?setLogin("signUp"):setLogin("login") 
    firstActifRef.current.focus()
  }  
  const handleSignUp=(e)=>{
    e.preventDefault()
    if(e.target.username.value===""||e.target.password.value===""||e.target.email.value===""){
      alert("Please fill all the fields")
    }else if(e.target.email.value.indexOf("@")===-1){
      alert("Please enter a valid email")
    }else if(e.target.password.value.length<8){
      alert("Password must be at least 8 characters")
    }else{
      dataUser.current=[...dataUser.current,{
        username:e.target.username.value,
        password:e.target.password.value,
        email:e.target.email.value
      }]
    localStorage.setItem("dataUser",JSON.stringify(dataUser.current))
    }
    e.target.username.value=""
    e.target.password.value=""
    e.target.email.value=""
    window.location.href="/app" 
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    if(e.target.username.value===""||e.target.password.value===""){
      alert("Please fill all the fields")
    }else{
      const data=dataUser.current.filter((item)=>e.target.username.value===item.username&&e.target.password.value===item.password)
      console.log(data)
      e.target.username.value=""
      e.target.password.value=""
      window.location.href="/app"
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <HomeForm.Header tittle={login}/>
      <HomeForm.Body tittle={login} signUp={handleLoginSignUp} ref={firstActifRef} onSubmitSignUp={handleSignUp} onSubmitLogin={handleLogin} />
    </div>
  )
}
const Header=(props)=>{
  const{tittle}=props
  return(
    <h1 className="text-6xl capitalize font-bold font-serif">{tittle}</h1>
  )
}

const Body=forwardRef((props,ref)=>{
  const {onSubmitLogin, onSubmitSignUp, tittle, signUp}=props

  if(tittle==="login"){
    return(
      <Fragment>
          <form className="w-full max-w-sm bg-slate-200 px-5 py-6 rounded-xl" onSubmit={onSubmitLogin}>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-xl font-semibold font-serif">UserName</label>
            <input
            ref={ref}
            type="text" 
            name="username" 
            id="username" 
            placeholder="Enter UserName"
            className="px-4 py-2 bg-gray-100 shadow-md rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="password" className="text-xl font-semibold font-serif">Password</label>
            <input
            type="password" 
            name="password" 
            id="password" 
            placeholder="**********"
            className="px-4 py-2 bg-gray-100 shadow-md rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button
          type="submit"
          className="mt-5 text-slate-50 font-semibold text-lg bg-blue-500 px-12 py-2 rounded-lg hover:bg-blue-900 transition-all duration-500">Submit</button>
        </form>
        <p className="text-red-500 text-lg font-serif font-bold">Don't have an account? <span onClick={signUp} className="text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-400 transition-all duration-500">Sign Up</span></p>
      </Fragment>  
    )
  }else{
    return(
      <Fragment>
        <form className="w-full max-w-sm bg-slate-200 px-5 py-6 rounded-xl" onSubmit={onSubmitSignUp}>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-xl font-semibold font-serif">UserName</label>
                <input
                ref={ref}
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter UserName"
                className="px-4 py-2 bg-gray-100 shadow-md rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="email" className="text-xl font-semibold font-serif">Email</label>
                <input
                type="email" 
                name="email" 
                id="email" 
                placeholder="example@gmail.com"
                className="px-4 py-2 bg-gray-100 shadow-md rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="password" className="text-xl font-semibold font-serif">Password</label>
                <input
                type="password" 
                name="password" 
                id="password" 
                placeholder="**********"
                className="px-4 py-2 bg-gray-100 shadow-md rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div> 
              <button
              type="submit"
              className="mt-5 text-slate-50 font-semibold text-lg bg-blue-500 px-12 py-2 rounded-lg hover:bg-blue-900 transition-all duration-500">Submit</button>
          </form>
          <p className="text-red-500 text-lg font-serif font-bold"> Have an account? <span onClick={signUp} className="text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-400 transition-all duration-500">Login</span></p>
      </Fragment>  
    )
  }
})

HomeForm.Header=Header
HomeForm.Body=Body
export default HomeForm