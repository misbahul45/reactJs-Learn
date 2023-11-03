import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPost, getAllPost } from "./App/ActionSlice"
import { updatePost } from "./App/ActionSlice"
function App() {
  const dispatch=useDispatch()
  let getAction=useSelector(getAllPost)
  const loading=useSelector((state)=>state.actions.loading)
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState()
  const [name,setName]=useState('')

  const handleSubmit=()=>{
    if(!edit){
      if(name){
        const newData={
          id:getAction.length+1,
          name:name,
          keterangan:"hallo "+name
        }
        dispatch(addPost(newData))
        setName('')
      }
    }else{
      const updateData={
        id,
        name:name,
        keterangan:"hallo "+name
      }
      dispatch(updatePost(updateData))
      setName('')
      setEdit(false)
    }
  }

  return (
     <div className="flex flex-col justify-center items-center h-screen">
        {
          loading===undefined?
          <p>....Loading</p>
          :
          <form className="bg-blue-500 flex flex-col w-full max-w-sm gap-2 px-5 py-20 rounded-2xl shadow-lg">
            <input className="pl-4 py-3 rounded-full" type="text" placeholder="input your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleSubmit} type="button" className="bg-red-500 py-2 rounded-lg">Save</button>
          </form>
        }

        {
          getAction.map((action)=>(
            <div onClick={()=>{
              setEdit(true)
              setId(action.id)
              setName(action.name)
            }} className="mt-2 px-3 py-2 text-white rounded-md shadow-lg bg-blue-500 cursor-pointer " key={action.id}>
              <p>Name : {action.name}</p>
              <p>Ket : {action.keterangan}</p>
            </div>
          ))
        }
     </div>
  )
}

export default App
