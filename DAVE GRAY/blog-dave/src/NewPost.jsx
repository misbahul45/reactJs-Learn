import React from 'react'
import { useNavigate } from 'react-router'
import Api from './Api/posts'
const NewPost = (props) => {
  const {posts,setPosts,postBody, setPostBody, posTitle, setPosTitle} = props
  let navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=posts.length?posts[posts.length-1].id+1:1
    const datetime=new Date().toString()
    const newPost={
      id:id,
      title:posTitle,
      dateTime:datetime,
      body:postBody
    }
   const fetchUpdate=async()=>{
    try{
      const response=await Api.post('',newPost)
      setPosts([...posts,
        response.data
      ])
      setPosTitle('')
      setPostBody('')
      navigate('/')
    }catch(err){
      console.log(err)
    }
   }
   fetchUpdate()
  }
  return (
    <main className="w-full flex flex-col justify-between h-full  py-5">
      <h1 className="text-red-500 text-2xl font-bold font-serif text-center mb-2">New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-red-500 px-4 py-2 rounded-3xl">
        <label htmlFor="title" className="flex flex-col gap-2">
          <span className="text-slate-50 font-bold font-serif text-lg capitalize ml-4">Title</span>
          <input className="px-4 py-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" type="text" id="title" placeholder="Title" required value={posTitle} onChange={(e)=>setPosTitle(e.target.value)}/>
        </label>
        <label htmlFor="body"  className="flex flex-col gap-2">
          <span className="text-slate-50 font-bold font-serif text-lg capitalize ml-4">Body</span>
          <textarea className="px-4 py-2 rounded-2xl h-[170px] outline-none focus:ring-2 focus:ring-blue-500 " name="body" id="body" value={postBody} onChange={(e)=>setPostBody(e.target.value)} required ></textarea>
        </label>
        <button type="submit" className="py-2 bg-blue-600 rounded-2xl w-[200px] mx-auto text-slate-50 uppercase font-serif font-semibold active:bg-blue-200 hover:shadow-xl hover:bg-blue-800 transition-all duration-500 ease-in-out">Add Post</button>
      </form>
    </main>
  )
}

export default NewPost