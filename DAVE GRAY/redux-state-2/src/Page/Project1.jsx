import React from 'react'
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPost,filterActions,getAllPost,updatePost } from '../App/ActionSlice'

const Project1 = () => {
    const dispatch=useDispatch()
    let getAction=useSelector(getAllPost)
    const loading=useSelector((state)=>state.actions.loading)
    const users=useSelector((state) => state.user)
    const [allItems,setAllItems]=useState([])
    const [edit,setEdit]=useState(false)
    const [id,setId]=useState()
    const [name,setName]=useState('')
    const [userId,setUserId]=useState()
    const [user,setUser]=useState('')
    const [itemsUser,setItemsUser]=useState([])
    const [filterId,setFilterId]=useState()
    const getActionItem=useSelector((state)=>filterActions(state,filterId))
  
  
    useEffect(()=>{
      if(user){
        const getIdUser=users.filter((usor)=>usor.name===user)
        setUserId(getIdUser[0].userId)
      } else if(getAction){
        setAllItems(getAction)
      }
    },[getAction,user])
    
    useEffect(()=>{
      setItemsUser(getActionItem)
    },[getActionItem,itemsUser])
  
    
    const handleSubmit=()=>{
      if(!edit){
        if(name){
          setId(getAction.length+1)
          const newData={
            id,
            name:name,
            user,
            keterangan:"hallo "+name,
            userId
          }
          dispatch(addPost(newData))
          setName('')
          setUser('')
          setUserId()
        }
      }else{
        const updateData={
          id,
          name:name,
          user,
          keterangan:"hallo "+name,
          userId
        }
        dispatch(updatePost(updateData))
        setName('')
        setUser('')
        setUserId()
        setEdit(false)
      }
    }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5 bg-gray-700">
        <h1 className="text-xl mb-3 text-white font-semibold">Playing Redux</h1>
        {
        loading===undefined?
        <p>....Loading</p>
        :
        <form className="bg-blue-500 flex flex-col w-full max-w-sm gap-2 px-5 py-7 rounded-2xl shadow-lg">
            <input className="pl-4 py-3 rounded-full" type="text" placeholder="input your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <select onChange={(e)=>setUser(e.target.value)} name="" id="">
            {
            user===''?
            <>
                <option value="">select user...</option>
                {
                users.map((user)=>(
                    <option key={user.userId} value={user.name}>{user.name}</option>
                ))
                }      
            </>
            :
            <option value={user}>{user}</option>
            }
            </select>
            <button onClick={handleSubmit} type="button" className="bg-red-500 py-2 rounded-lg">Save</button>
        </form>
        }
        <div className="flex justify-between w-full max-w-lg px-3 mt-6">
        <p
        onClick={()=>{
            setAllItems(getAction)
            setItemsUser([])
        }}
        className="bg-blue-500 text-white px-2 py-1 rounded-full shadow-lg cursor-pointer hover:bg-blue-900 transition-all ease-in-out duration-300">All Items</p>
        {users.map((user)=>(
            <p
            onClick={()=>{
            setAllItems([])
            setFilterId(user.userId) 
            }}
            key={user.userId} className="bg-blue-500 text-white px-2 py-1 rounded-full shadow-lg cursor-pointer hover:bg-blue-900 transition-all ease-in-out duration-300">{user.name}</p>
        ))}
        </div>
        {
        getAction.length!==0 &&
        <div className="grid grid-cols-2 mt-5 w-full px-10 gap-4">
            {
            allItems.map((action)=>(
                <div
                key={action.id}
                onClick={()=>{
                setEdit(true)
                setId(action.id)
                setName(action.name)
                setUser(action.user)
                setUserId(action.userId)
                }} className="mt-1 w-full px-3 py-2 text-white rounded-md shadow-lg bg-blue-500 cursor-pointer " key={action.id}>
                <p>Name : {action.name}</p>
                <p>Ket : {action.keterangan}</p>
                <p>user : {action.user}</p>
                </div>
            ))
            }
        </div>
        }
        {
        itemsUser&&
        <div className="grid grid-cols-2 mt-5 w-full px-10 gap-4">
            {
            itemsUser.map((action)=>(
                <div
                key={action.id}
                onClick={()=>{
                setEdit(true)
                setId(action.id)
                setName(action.name)
                setUser(action.user)
                setUserId(action.userId)
                }} className="mt-1 w-full px-3 py-2 text-white rounded-md shadow-lg bg-blue-500 cursor-pointer " key={action.id}>
                <p>Name : {action.name}</p>
                <p>Ket : {action.keterangan}</p>
                <p>user : {action.user}</p>
                </div>
            ))
            }
        </div>
        }
    </div>
  )
}

export default Project1