import React, { useEffect } from 'react'
import { selectAllPosts,getPostsError,getPostsStatus,fetchPosts } from "../postSlice";
import AddPost from "./AddPost";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostsExcerpt from './PostsExcerpt';
const PostsList = () => {
  const dispatch=useDispatch()

    const posts=useSelector(selectAllPosts)
    const postsStatus=useSelector(getPostsStatus)
    const error=useSelector(getPostsError)

    useEffect(()=>{
      if(postsStatus==='idle'){
        dispatch(fetchPosts())
      }
    },[postsStatus,dispatch])

    let content;
    if(postsStatus==='loading'){
      content=<p>Loading.....</p>
    }else if(postsStatus==='succeede'){
      const orderedPost=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
     content=orderedPost.map((post)=>{
      return <PostsExcerpt key={post.id} post={post} />
     })
    }else if(postsStatus==='failed'){
      content=<p>{error}</p>
    }

  return (
    <section className="bg-slate-800 min-h-screen flex flex-col items-center justify-center gap-2 px-7 py-1">
        <AddPost />
       <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 w-full  gap-4 border-white border-2 rounded-2xl p-5">
       {content}
       </div>
    </section>
  )
}

export default PostsList
