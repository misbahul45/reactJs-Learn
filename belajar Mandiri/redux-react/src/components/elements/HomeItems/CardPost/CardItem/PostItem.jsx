import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from './TimeAgo'
import Reaction from './Reaction'
import {BiSolidUpArrow} from 'react-icons/bi'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import {GiLobArrow} from 'react-icons/gi'

const PostItem = ({post}) => {
  const reactionIcons = {
    Upvote: <BiSolidUpArrow className="text-lg" />,
    Comments: <BsFillChatRightTextFill className="text-lg" />,
    Share: <GiLobArrow className="text-lg" />
  };
  return (
    <>
      <Link to={`/post/${post.id}`} className="flex flex-col">
          <div className="flex flex-col justify-between pt-8">
             <div>
                <h1 className={`${String(post.title).length > 30 ? "text-sm" : "text-lg"} text-white font-semibold uppercase`}>{post.title}</h1>
                <TimeAgo timestamp={post.date} />
             </div>
              <div>
                <img src={post.img} className="w-full object-cover h-56" />
              </div>
          </div>
      </Link>  
      <div>
          <Reaction reaction={post.reaction} reactionIcons={reactionIcons} />
      </div>
    </>
  )
}

export default PostItem