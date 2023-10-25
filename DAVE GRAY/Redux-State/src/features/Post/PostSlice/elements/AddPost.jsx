import React,{useState} from 'react'
import { useDispatch,useSelector } from "react-redux";;
import { addNewPost, selectAllPosts } from '../postSlice';
import { selectAllUsers } from '../users/userSlice';


const AddPost = () => {
    const [userId,setUserId]=useState('')
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [addRequestStatus,setAddRequestStatus]=useState('idle')

    const dispatch=useDispatch()
    const users=useSelector(selectAllUsers)
    const canSave=[title,content,userId].every(Boolean) && addRequestStatus==='idle'

    const onTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const onContentChange=(e)=>{
        setContent(e.target.value)
    }
    const onAuthorChange=(e)=>{
        setUserId(e.target.value)
    }
    const usersOption=users.map((user)=>(
        <option key={`${user.id}-user`} value={user.id}>
            {user.name}
        </option>
    ))

    const onSavePostClicked=()=>{
         if(canSave){
            try{
                setAddRequestStatus('pending')
                dispatch(addNewPost({title,body:content,userId})).unwrap()
                setTitle('')
                setContent('') 
                setUserId('')  
            }catch(e){
                console.log("erro")
            }finally{
                setAddRequestStatus('idle')
            }
         }
    }
    const allPost=useSelector(selectAllPosts)
    console.log(allPost)

  return (
    <div className="w-full max-w-lg mb-5">
    <h1 className="text-white text-center font-bold uppercase text-2xl font-serif my-5">Add a New Post</h1>
        <form className="bg-gray-500 px-5 py-7 rounded-xl flex flex-col gap-4">
            <label htmlFor="title" className="w-full flex flex-col gap-1">
                <span className="text-slate-50 font-semibold ml-2 text-lg">Title</span>
                <input
                className="px-2 py-1 rounded-lg outline-none text-slate-700 text-md focus:ring-[3px] focus:ring-slate-700 bg-gray-100"
                type="text" 
                name="title" 
                id="title" 
                value={title} 
                onChange={onTitleChange} 
                required />
            </label>
            <div className="w-full max-h-4">
                <select className="bg-gray-100 w-full rounded-lg px-5 py-1" name="author" id="author" onChange={onAuthorChange} >
                    <option value="">Select Users .......</option>
                    {usersOption}
                </select>
            </div>
            <label htmlFor="content" className="w-full flex flex-col">
                <span className="text-slate-50 font-semibold ml-2 text-lg">Content</span>
                <input
                className="px-2 py-1 rounded-lg outline-none text-slate-700 text-md focus:ring-[3px] focus:ring-slate-700 bg-gray-100"
                type="text" 
                name="content" 
                id="content" 
                value={content} 
                onChange={onContentChange} 
                required />
            </label>
            <button
            className="bg-black text-white w-24 py-2 rounded-lg cursor-pointer hover:bg-black/70"
            type="button" 
            disabled={!canSave}
            onClick={onSavePostClicked}>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost