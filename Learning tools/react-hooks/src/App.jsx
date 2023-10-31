import { useState,useReducer,useEffect,useRef } from "react"
import axios from "axios"
import Parent from "./useContextLearn/Parent"
const counterAppUseState=()=>{
  const [counter,setCounter]=useState(0)
  const [inputCounter,setInputCounter]=useState()
  const plus=()=>{
    inputCounter!==0&&inputCounter!==undefined?setCounter(counter+inputCounter):setCounter(counter+1)
  }
  const minus=()=>{
    inputCounter!==0&&inputCounter!==undefined?setCounter(counter-inputCounter):setCounter(counter-1)
  }
  return(
    <div className="flex flex-col gap-2 w-96 items-center py-6 rounded-md bg-blue-500 shadow-lg shadow-blue-100">
        <input type="text" placeholder="Number..." value={inputCounter} onChange={(e)=>setInputCounter(Number(e.target.value))} className="pl-5 py-1 rounded-lg bg-white/20 w-72 placeholder:text-white text-white font-semibold border-2 border-slate-50 outline-none" />
        <h1 className="text-white font-semibold text-2xl">{counter}</h1>
        <div className="flex gap-5">
          <button onClick={plus} className="py-2 bg-white text-red-500 font-bold text-xl rounded-md shadow-md w-24 text-center hover:bg-gray-700 hover:text-white transition-all duration-500">Plus</button>
          <button onClick={minus} className="py-2 bg-red-500 text-white font-bold text-xl rounded-md shadow-md w-24 text-center hover:bg-white hover:text-red-500 transition-all duration-500">Minus</button>
        </div>
    </div>
  )
}

const counterAppUseReducer=()=>{
  const reducer=(state,actions)=>{
    switch(actions.type){
      case "Increment":
        return {count:state.count+1,showText:state.showText}

        case "Decrement":
          return {count:state.count>0?state.count-1:state.count,showText:state.showText}
      case "toggelShow":
        return {count:state.count,showText:!state.showText}
      default:
        state
    }
  }
  const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return(
    <div className="flex flex-col gap-2 w-96 items-center py-6 rounded-md bg-blue-500 shadow-lg shadow-blue-100">
        <h1 className="text-white font-semibold text-2xl">{state.count}</h1>
        <div className="flex gap-5">
          <button onClick={()=>dispatch({type:"Increment"})} className="py-2 bg-white text-red-500 font-bold text-xl rounded-md shadow-md w-24 text-center hover:bg-gray-700 hover:text-white transition-all duration-500">Plus</button>
          <button onClick={()=>dispatch({type:"Decrement"})} className="py-2 bg-red-500 text-white font-bold text-xl rounded-md shadow-md w-24 text-center hover:bg-white hover:text-red-500 transition-all duration-500">Minus</button>
        </div>
    </div>
  )
}

const useEffectLearn=()=>{
 useEffect(()=>{
    const getData=async()=>{
      try{
      const response=await axios.get("https://jsonplaceholder.typicode.com/comments")
       console.log(response.data)
      }catch(e){
        console.log(e)
      }
    }
    setTimeout(()=>{
      getData()
    },200)
 },[]) 
}

const useRefApp=()=>{
  const inputRef=useRef()
  const [name,setName]=useState('')
  const handleName=()=>{
      setName(inputRef.current.value)
      inputRef.current.value=""
  }
  return(
    <div className="mt-4 bg-blue-500 px-10 py-10 rounded-md w-full max-w-sm">
      <div className="flex gap-3">
        <input
        className="pl-3 py-1 rounded-md w-full outline-none text-white bg-transparent border-2 border-slate-50 placeholder:text-white placeholder:font-semibold"
        type="text" ref={inputRef} placeholder="Input Your Name..." />
        <button
        className="bg-purple-500 px-3 py-1 rounded-md shadow-md text-white font-semibold hover:bg-purple-900 transition-all duration-500"
        onClick={handleName}>Change</button>
      </div>
      <p className="text-white font-semibold text-center mt-2 first-letter:uppercase">{name?name:"Your name..."}</p>
    </div>
  )
}
function App() {
  useEffectLearn()
  return (
    <main className="min-h-screen py-5 w-full flex flex-col justify-center items-center gap-3">
     {counterAppUseState()}
     {counterAppUseReducer()}
     {useRefApp()}

     <Parent />
    </main>
  )
}

export default App
