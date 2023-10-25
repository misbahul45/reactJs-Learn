import React from 'react'
import Post from './Small Element/Post'
const Feed = ({posts}) => {
  return (
    <div className={`${posts.length>3?"overflow-y-scroll":""} h-[71vh]  no-scrollbar`}>
        {
          posts.map((post)=>(
             <Post key={post.id} post={post} />
          ))
        }   
    
    </div>
  )
}

export default Feed