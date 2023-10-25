import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <article className="bg-gray-200 px-5 py-4 h-[130px] rounded-xl mb-3">
        <Link to={`/post/${post.id}`} >
          <h1 className="text-lg capitalize text-slate-800 font-semibold">{post.title}</h1>
          <h2 className="textt-slate-100 text-sm opacity-60">
            {post.dateTime}
          </h2>
        </Link>
        <p className="text-slate-700">
          {(post.body).length<=85?
            (post.body)
            :`${(post.body).slice(0,85)}...`}
        </p>
    </article>
  )
}

export default Post