import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import React from 'react'

const PostAuthor = ({ userId }) => {
     const allUsers=useSelector(selectAllUsers)
     const author=allUsers.find((user)=>user.id===Number(userId))
    return (
        <span>{author?"by "+author.name:'Unknown'}</span>
    )
}

export default PostAuthor