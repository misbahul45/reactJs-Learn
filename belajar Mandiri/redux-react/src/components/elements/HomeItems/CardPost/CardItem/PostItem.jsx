import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from './TimeAgo'
import Reaction from './Reaction'
const PostItem = ({post}) => {
  return (
    <>
      <Link to={`/post/${post.id}`} className="flex flex-col">
          <div className="flex flex-col justify-between pt-8">
             <div>
                <h1 className={`${post.title.length>30?"text-sm":"text-lg"} text-white font-semibold uppercase`}>{post.title}</h1>
                <TimeAgo timestamp={post.date} />
             </div>
              <div>
                <img src={post.img} className="w-full object-cover h-56" />
              </div>
          </div>
          <div>
            <Reaction reaction={post.reaction} />
          </div>
      </Link>  
    </>
  )
}

export default PostItem