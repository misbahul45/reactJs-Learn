import React, { useEffect, useRef } from 'react'
import { selectAllPosts,getPostsError,getPostsStatus,fetchPosts } from "../postSlice";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostsExcerpt from './PostsExcerpt';
const PostsList = () => {
    const dispatch=useDispatch()
    const topRef=useRef()

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

    const handleTopRef=()=>{
      if(topRef.current){
        topRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  return (
    <section ref={topRef} className="bg-slate-800 flex flex-col items-center justify-center gap-2 px-7 py-5">
       <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 w-full  gap-4  rounded-2xl p-5">
       {content}
       </div>
       <button onClick={handleTopRef} className="fixed bottom-4 left-4 z-20 bg-red-500 px-10 py-3 rounded-lg">up</button>
    </section>
  )
}

export default PostsList
