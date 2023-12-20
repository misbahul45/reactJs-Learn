import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { editPost, selectAllPosts } from '../postSlice'

const EditPost = () => {
    const getId =useParams()
    const postId=Number(getId.id)
    const selectpost=useSelector(selectAllPosts)
    const post=selectpost.find((post)=>post.id===postId)

    const [title,setTitle]=useState(post.title)
    const [body,setBody]=useState(post.body)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleEdit=()=>{
      const editPostItem={
        postId,
        title,
        body,
        date:new Date().toISOString()
      }
      dispatch(editPost(editPostItem))
      navigate(`/post/${postId}`)
    }

    if(!post){
      return(
        <section className="flex items-center justify-center h-screen bg-slate-900">
          <h2 className="text-white text-6xl font-semibold">Post Not Found</h2>
        </section>
      )
    }
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-800">
    <div className="w-full max-w-lg mb-5">
        <h1 className="text-white text-center font-bold uppercase text-2xl font-serif my-5">Edit Post</h1>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-gray-500 px-5 py-7 rounded-xl flex flex-col gap-4">
                <label htmlFor="title" className="w-full flex flex-col gap-1">
                    <span className="text-slate-50 font-semibold ml-2 text-lg">Title</span>
                    <input
                    className="px-2 py-1 rounded-lg outline-none text-slate-700 text-md focus:ring-[3px] focus:ring-slate-700 bg-gray-100"
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}  
                    required />
                </label>
                <label htmlFor="content" className="w-full flex flex-col">
                    <span className="text-slate-50 font-semibold ml-2 text-lg">Content</span>
                    <textarea
                    placeholder="content"
                    className="px-2 py-1 rounded-lg outline-none text-slate-700 text-md focus:ring-[3px] focus:ring-slate-700 bg-gray-100 h-48 resize-none"
                    type="text" 
                    name="content" 
                    id="content" 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)} 
                    required />
                </label>
                <button
                onClick={handleEdit}
                className="bg-black text-white w-24 py-2 rounded-lg cursor-pointer hover:bg-black/70"
                type="button">Edit Post</button>
            </form>
        </div>
</main>
  )
}

export default EditPost