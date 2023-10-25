import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import Reactions from './Reactions'
const PostsExcerpt = ({post}) => {
    console.log(post)
  return (
    <>
        <article className="border-white border-[1.5px] rounded-2xl  p-3 flex flex-col justify-between">
                <div>
                    <h1 className="text-gray-50 text-2xl text-center font-semibold">{post.title}</h1>
                        <p className="text-slate-50 first-letter:uppercase">{post.body.substring(0,100)}</p>
                        <p className="text-slate-50">
                            <PostAuthor userId={post.userId} />
                        </p>
                </div>
                <div>
                    <TimeAgo  timestamp={post.date}/>
                    <Reactions post={post} />
                </div>
         </article>
    </>
  )
}

export default PostsExcerpt