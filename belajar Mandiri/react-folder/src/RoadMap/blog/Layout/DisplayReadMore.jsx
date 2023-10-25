import React, { useRef } from 'react'
import {AiFillEdit,AiOutlineClose,AiFillDelete,AiFillBackward} from 'react-icons/ai'
import apiRequest from '../../../get data/apiReques.service'
const DisplayReadMore = (props) => {
    const{edit,setEdit,setPosts,posts,getId,setReadMore,readMore}=props
    const post=posts.find((item)=>item.id==getId)
    const inputRef=useRef()
    const textAreaRef=useRef()
    if(edit){
      inputRef.current.value=post.tittle
      textAreaRef.current.value=post.body
    }
    
    const handleSubmitedit=(e)=>{
      e.preventDefault()
      setPosts(posts.map((item)=>item.id===getId?{
        ...item,
        tittle:e.target.tittle.value,
        body:e.target.body.value
      }:item))
      const editOption={
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          tittle:e.target.tittle.value,
          body:e.target.body.value
        })
      }
      const editAction=`http://localhost:3500/items/${getId}`
      apiRequest(editAction,editOption)
      setEdit(!edit)
      setReadMore(!readMore)
      e.target.tittle.value=""
      e.target.body.value=""
    }
    const handleBack=()=>{
      setReadMore(!readMore)
    }
    const handelDelete=()=>{
        setPosts(posts.filter((item)=>item.id!=getId))
        const deleteOption={
          method:'DELETE',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(posts)
        }
        const deleteAction=`http://localhost:3500/items/${getId}`
        apiRequest(deleteAction,deleteOption)
        setReadMore(!readMore)
    }
  return (
    <div className="relative h-[71vh] w-full">
            <form onSubmit={handleSubmitedit} className={` absolute left-0 top-0 w-full h-full bg-slate-100 px-5 pt-4 ${edit?"scale-100":"scale-0"} transition-all duration-300 ease-in-out z-10`}>
              <input ref={inputRef} type="text" name="tittle" id="tittle" className="w-full text-center outline-none bg-transparent border-b-2 border-blue-400 pt-5" placeholder="Tittle" />
              <textarea ref={textAreaRef} name="body" id="body" cols="30" rows="10" className={`w-full px-4 outline-none bg-transparent border-blue-400 pt-5`} placeholder="Content"></textarea>
              <button type="submit" className={`${edit?"block":"hidden"} block w-full max-w-xs mx-auto py-2 bg-blue-500 rounded-sm text-slate-50 font-serif font-bold hover:bg-blue-700 transition-all duration-300`}>Save Edit</button>
            </form>
            <div className="absolute z-[-1] left-0 top-0 h-full w-full flex flex-col ">
              <h1 className="font-bold text-center text-4xl capitalize text-slate-600">{post.tittle}</h1>
              <p className="text-justify text-slate-400 first-letter:uppercase">{post.body}</p>
            </div>
            <div onClick={()=>setEdit(!edit)} className={`absolute ${edit?"top-5 right-5":"bottom-5 left-5"} z-20`}>
              {
                edit?<AiOutlineClose className="text-red-500 text-3xl cursor-pointer"/> :<AiFillEdit className="text-blue-500 text-3xl cursor-pointer"/>
              }
            </div>
            <div onClick={handelDelete} className="absolute bottom-5 right-5 z-0">
              <AiFillDelete className="text-3xl text-red-600 cursor-pointer" />
            </div>
            <div onClick={handleBack} className="absolute bottom-5 left-1/2 transform translate-x-[-50%] z-0">
              <AiFillBackward className="text-3xl text-cyan-400 cursor-pointer" />
            </div>
    </div>
  )
}

export default DisplayReadMore