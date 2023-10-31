import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementByAMount } from './counterSLice';
import { useState } from 'react';
const Counter = () => {
  const count=useSelector((state)=>state.counter.count);
  const dispatch=useDispatch()
  const [incrementNumber,setIncrementNumber]=useState(0)  
  const addNumberByAMount=()=>{
    dispatch(incrementByAMount(incrementNumber))
  }
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-5">Redux State</h1>
      <p className="text-5xl mb-5">{count}</p>
      <div className="mb-5">
        <button onClick={()=>dispatch(increment())} className="bg-blue-500 w-20 py-1 rounded-lg text-white text-2xl hover:bg-blue-800 mr-4">+</button>
        <button onClick={()=>dispatch(decrement())} className="bg-blue-500 w-20 py-1 rounded-lg text-white text-2xl hover:bg-blue-800">-</button>
      </div>
      <input type="text" className="bg-gray-200 px-4 py-1 rounded-sm" value={incrementNumber} onChange={(e)=>setIncrementNumber(Number(e.target.value))} />
      <div className="mt-5">
      <button className="bg-red-500 w-20 py-1 rounded-lg text-white text-2xl hover:bg-red-800" onClick={
        ()=>{
            dispatch(reset())
            setIncrementNumber(0)
            }
      }>Reset</button>
        <button className="bg-blue-500 px-2  ml-2 py-1 rounded-lg text-white text-2xl hover:bg-blue-800" onClick={addNumberByAMount}>Add By Amount</button>
      </div>
    </section>
  )
} 

export default Counter