import React, { useEffect } from 'react'
import { useRef } from 'react'
import apiRequest from '../../../get data/apiReques.service'
const Form = (props) => {
  const { display,setDisplay,posts,setPosts,API_URL } = props
  const autoFocus=useRef()

  useEffect(()=>{
    autoFocus.current.focus()
  },[display])
  return (
    <div className="absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full max-w-sm z-20">
       <form
      onSubmit={
        (e)=>{
            e.preventDefault()
          if(e.target.tittle.value!==""){
            const newPost={
              id:new Date().getTime(),
              tittle:e.target.tittle.value,
              date:new Date().toLocaleDateString(),
              body:e.target.body.value
            }
            setPosts([...posts,newPost])
            const updateOption={
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(newPost)
              }
            apiRequest(API_URL,updateOption)
            setDisplay(!display)
            e.target.tittle.value=""
            e.target.body.value=""
          }else{
            alert("Please fill the form")
          }
       }

      } 
       className={`${display?"block":"hidden"} relative w-full max-w-sm px-2 py-5 mx-auto bg-gradient-to-tr from-white to-blue-600 rounded-lg shadow-2xl transition-all duration-500`}>
          <h1 className="text-center font-bold text-slate-50 uppercase">Add Post</h1>
          <label htmlFor="tittle" className="w-full max-w-xs flex flex-col mx-auto mb-4">
            <span className="ml-3 mb-1 font-semibold  text-red-500">Tittle*</span>
            <input ref={autoFocus} type="text" name="tittle" id="tittle" className="px-4 py-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl"  placeholder="Post Title"/>
          </label>
          <label htmlFor="body" className="w-full max-w-xs flex flex-col mx-auto">
            <span className="ml-3 mb-1 font-semibold text-red-500">Content*</span>
            <textarea className="outline-none px-4 py-1 rounded-lg resize-none focus:ring-2 focus:ringblue-500 focus:shadow-xl"  name="body" id="body" cols="20" rows="5" placeholder="Leave a comment here...."></textarea>
          </label>
          <button className=" relative ml-6 px-6 py-[10px] bg-purple-700 mt-3 uppercase text-slate-50 font-serif font-bold rounded-md shadow-sm hover:shadow-2xl hover:bg-purple-900 hover:transition-all duration-500 group"><span className="absolute bottom-0 right-0 bg-cyan-300  rounded-b-md h-1 w-0 group-hover:w-full transition-all duration-500"></span><span className="absolute top-0 left-0 bg-cyan-300  rounded-b-md h-1 w-0 group-hover:w-full transition-all duration-500"></span>Add Post</button>
        </form>
    </div>
  )
}

export default Form