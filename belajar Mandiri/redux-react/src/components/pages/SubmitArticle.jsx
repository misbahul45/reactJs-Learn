import React, { useState } from 'react'
import {BiSolidUpArrow,BiSolidDownArrow} from 'react-icons/bi'
import { useDispatch,useSelector } from 'react-redux'
import { addPost } from '../../reduxStore/PostsSlice/postSlice'
import { useNavigate } from 'react-router'
import { getAllPost } from '../../reduxStore/PostsSlice/postSlice'
const SubmitArticle = ({open,setClickSideBar}) => {
    let navigate=useNavigate()
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const [img,setImg]=useState('')
    const [dropbown,setDropbown]=useState(false)

    const post=useSelector(getAllPost)
    console.log(post)



    const handleImage=(e)=>{
        setImg(e.target.value)
        setDropbown(false)
    }
    const handleSumbitArticle=()=>{
        dispatch(addPost(title,body,img))
        setClickSideBar("feed")
        navigate('/')
    }
  return (
    <main className={`${open?"px-0":"lg:pl-80"} bg-slate-900 w-full h-full flex flex-col lg:gap-4 gap-5 items-center justify-center transition-all duration-500`}>
        <h1 className={`${open?"lg:text-5xl":"lg:text-4xl"} font-roboto font-bold text-slate-50 transition-all duration-500`}>Write a New Article</h1>
        <form
        onSubmit={handleSumbitArticle}
        className={`relative w-full ${open?"max-w-2xl":"max-w-lg"} flex flex-col transition-all duration-500`}>
            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}   
            type="text" id="title" placeholder="Title....." className="bg-transparent border-b-[3px] border-gray-700 outline-none pb-2 text-slate-50 placeholder:text-xl text-center capitalize"  autoFocus required/>
            <div className="flex items-start mt-5">
                <button
                        type="button"
                        onClick={()=>setDropbown(true)}
                        className="flex items-center gap-2 justify-center bg-blue-500 text-white font-semibold max-w-[200px] py-3 px-5 rounded-lg hover:bg-blue-800 transition-all duration-500 group">Image content
                            {
                                dropbown?
                                <BiSolidDownArrow className="text-purple-800 text-2xl group-hover:text-purple-500 transition-all duration-500"/>
                                :
                                <BiSolidUpArrow className="text-purple-800 text-2xl group-hover:text-purple-500 transition-all duration-500"/>
                            }
                </button>
            </div>
            <div className={`${img?"px-3 py-1 bg-purple-700 w-[220px] text-center my-5 text-lg font-bold text-slate-50 rounded-full shadow-sm shadow-white":""}`}>{img?"#"+img:""}</div>
            <div className={`w-full ${open?"max-w-2xl":"max-w-lg"} absolute top-[105px] flex flex-col transition-all duration-500 ${dropbown?"z-10":"-z-10"}`}>
                <div className={`w-full flex flex-col mt-2 border-[1px] rounded-xl ${dropbown?"translate-y-0 scale-100":"-translate-y-40 scale-0"} backdrop-blur-md  transition-all duration-500`}>
                    <button
                    onClick={handleImage}
                    type="button"
                    className="border-b-[1px] bg-purple-600 text-md py-1 rounded-t-xl text-white font-semibold hover:bg-purple-900 transition-all duration-500" value="Programing">Programing</button>
                    <button
                    onClick={handleImage}
                    type="button"
                    className="border-b-[1px] bg-purple-600 text-md py-1 text-white font-semibold hover:bg-purple-900 transition-all duration-500"
                    value="LifeStyle">Lifestyle</button>
                    <button
                    onClick={handleImage}
                    type="button"
                    className="border-b-[1px] bg-purple-600 text-md py-1 text-white font-semibold hover:bg-purple-900 transition-all duration-500"
                    value="Digital">Digital</button>
                    <button
                    onClick={handleImage}
                    type="button"
                    className="border-b-[1px] bg-purple-600 text-md py-1 text-white font-semibold hover:bg-purple-900 transition-all duration-500"
                    value="Artificial Intelligence">Artificial intelligence</button>
                    <button
                    onClick={handleImage}
                    type="button"
                    className="border-b-[1px] bg-purple-600 text-md py-1 text-white font-semibold hover:bg-purple-900 transition-all duration-500"
                    value="School">School</button>
                    <input
                     value={img}
                     onChange={(e)=>setImg(e.target.value)}   
                    type="text" placeholder="Another......" className="bg-transparent px-3 py-2 outline-none text-white capitalize border-b-2" />
                    <button
                    onClick={()=>setDropbown(false)}
                    type="button" className="bg-blue-500 text-white font-semibold mx-auto py-1 px-10 my-2">Save</button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                    <textarea
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    className="mt-24 resize-none bg-transparent outline-none border-b-[2px] border-slate-400 text-slate-50 text-md first-letter:capitalize first-letter:text-2xl transition-all duration-500"
                    name="" placeholder="Write Content......" required></textarea>
                    <button
                    type="button"
                    onClick={handleSumbitArticle}
                    className="bg-red-500 text-slate-50 font-roboto uppercase font-bold py-2 rounded-xl hover"
                    >Sends</button>
            </div>
        </form>

    </main>
  )
}

export default SubmitArticle
