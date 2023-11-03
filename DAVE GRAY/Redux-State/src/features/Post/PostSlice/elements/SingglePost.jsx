import React from 'react'
import { useSelector } from 'react-redux'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import Reactions from './Reactions'

import { selectAllPosts } from '../postSlice'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const SingglePost = () => {
  const getId =useParams()
  const postId=Number(getId.id)

  const selectpost=useSelector(selectAllPosts)
  const post=selectpost.find((post)=>post.id===postId)
  if(!post){
    return(
      <section className="flex items-center justify-center h-screen bg-slate-900">
        <h2 className="text-white text-6xl font-semibold">Post Not Found</h2>
      </section>
    )
  }

 
  return (
    <section className="flex items-center justify-center h-screen bg-slate-900">
      <article className="w-full max-w-lg bg-slate-400 px-5 py-6 rounded-lg shadow-white shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">{post.title}</h2>
        <div className="w-full bg-transparent h-auto max-h-none"> {post.body}</div>
        <div className="flex  items-center">
          <Link className="text-white font-semibold bg-red-500 mr-5 px-3 py-2 rounded-md" to={`/post/edit/${post.id}`}>Edit Post</Link>
          <PostAuthor userId={post.id} />
          <TimeAgo timestamp={post.date} />
        </div>
        <Reactions post={post} />
      </article>
  </section>
  )
}

export default SingglePost