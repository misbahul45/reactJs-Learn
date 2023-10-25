import React from 'react'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Api from './Api/posts';
const PostPage = ({posts, setPosts}) => {
  const { id }=useParams();
  let navigate=useNavigate();
  const post=posts.find((post)=>(post.id).toString()===id);
  const handleDelete=(id)=>{
    const fetchDelete=async()=>{
      try{
        await Api.delete('/'+id)
        setPosts(posts.filter((post)=>post.id!==id));
        navigate('/');
      }catch(err){
        console.log(err)
      }
    }
    fetchDelete()
  }
  return (
    <main className="bg-gray-200 px-5 py-4 h-full w-full ">
      <article>
        {post &&
            <>
              <h1 className="text-slate-800 font-bold font-serif text-3xl capitalize">{post.title}</h1>
              <h2 className='text-gray-400'>{post.dateTime}</h2>
              <p className="text-[17px]">{post.body}</p>
              <button className="bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-800 mt-2 transition-all duration-500" onClick={()=>handleDelete(post.id)}>Delete Post</button>
              <Link to={`/edit/${id}`}><button className=" mt-2 ml-4 bg-green-500 px-4 py-1.5 rounded-md text-white hover:bg-green-800  transition-all duration-500">Edit Post</button></Link>
            </>
        }
        {
          !post &&
          <>
            <h1 className="text-slate-800 font-bold font-serif text-3xl capitalize">Post Not Found</h1>
            <p>Sorry, the post you requested could not be found</p>
            <p>
              <Link to='/'>
                <button className="bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-800 mt-2 transition-all duration-500">Go Back</button>
              </Link>
            </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage