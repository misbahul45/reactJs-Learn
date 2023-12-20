import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useHandleDeleteMutation, useHandleFinishedMutation } from '../app/ApiTodo';
const TodoItem = ({datum},index) => {
    const [isFinished]=useHandleFinishedMutation()
    const [deleteItem]=useHandleDeleteMutation()
    const handleFinished=()=>{
        isFinished({...datum,isFinished:!datum.isFinished})
    }
    const handleDelete=(datum)=>{
        deleteItem(datum)
    }
    
  return (
    <div>
       <div className={`relative mb-1 px-5 flex items-center justify-between w-full h-12 bg-slate-950 border ${index == 0 ? 'rouded-t-2xl border-b' : ''}`}>
            <div className={`flex items-center gap-3`}>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" checked={datum.isFinished} onChange={handleFinished} />
                 <p className={`${datum.isFinished?"text-gray-400 line-through italic":"text-white"} font-mono capitalize`}>{datum.task}</p>
            </div>
            <button onClick={()=>handleDelete(datum)}>
                <AiOutlineDelete className="text-red-700 text-3xl font-bold" />
            </button>
        </div>
    </div>
  )
}

export default TodoItem
