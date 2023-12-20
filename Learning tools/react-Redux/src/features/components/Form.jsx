import React, { useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { getAllDays } from '../app/DaysSlice'
import { useAddTodoMutation, useGetAllTodoQuery } from '../app/ApiTodo'
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {
    const days=useSelector(getAllDays)

    const [todo,setTodo]=useState('')
    const [openDay,setOpenDay]=useState(false)
    const [day,setDay]=useState('days')

    const [addTodo]= useAddTodoMutation()
    const handleAddTodo=()=>{
      if(day!=="days"){
        const newTodo={
          id:nanoid(),
          task:todo,
          day,
          isFinished:false
        }
        addTodo(newTodo)
        setDay('days')
        setTodo('')
      }
    }
  return (
      <div className="relative w-full max-w-xl z-10">
        {day==="days"&&todo!==""&&
          <p className="mb-1 text-red-500 text-sm">Please Input Days</p>
        }
        <form className="bg-slate-700 py-1 px-1 rounded-md shadow-xl w-full" onSubmit={(e)=>e.preventDefault}>
            <div className="w-full  bg-red-600">
                <div className="relative flex">
                  <button
                  type="button"
                  onClick={()=>{
                    day==="days"?setOpenDay(!openDay):setOpenDay(false)
                  }}
                  className={`relative w-40 text-white font-semibold py-2 transition-all duration-500 uppercase ${day!=="days"?"bg-red-500":"bg-slate-500 hover:bg-gray-800"}`}>{day}</button>
                  <input value={todo} onChange={(e)=>setTodo(e.target.value)} className="flex-1 py-2 pl-4 pr-12 bg-slate-700 text-white outline-none border-b-2 border-slate-500 focus:border-gray-300" placeholder="Today..." type="text" />
                  <button
                  type="button"
                  onClick={handleAddTodo}
                  className={`absolute right-0 top-0 p-2 cursor-pointer rounded-md bg-gray-600 shadow-inner ${todo!==""?" block":" hidden"}  hover:bg-gray-900 transition-all duration-500`}>
                      <AiOutlineArrowUp className={` ${todo!==""?"text-white font-bold":""} text-2xl `} />
                  </button>
                </div>
                <ul className={`${openDay?"opacity-100 translate-y-0":"opacity-0 -translate-y-[120%] -z-10"} absolute w-40 bg-gray-700 mt-2 flex flex-col transition-all duration-500`}>
                  {
                    days.map((day,index)=>(
                      <li
                      onClick={()=>{
                        setDay(day)
                        setOpenDay(false)
                      }}
                      key={index} className="h-full w-full text-white/90 text-sm cursor-pointer pl-4 border-b-[1px] py-1 border-gray-600 hover:bg-slate-800">{day}</li>
                    ))
                  }
                </ul>
            </div>
        </form>
      </div>
  )
}

export default Form
