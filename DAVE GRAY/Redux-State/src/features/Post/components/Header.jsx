import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate()
  return (
    <header className="flex justify-between items-center px-2 py-2">
        <div>
            <button
            onClick={()=>{
              navigate('/')
            }} className="bg-red-500 text-white text-xl px-4 py-1 rounded-lg">Home</button>
        </div>
        <div>   
            <Link className="bg-blue-500 px-3 py-1 rounded-md text-white font-semibold" to="/newPost">Add New Post</Link>
        </div>
    </header>
  )
}

export default Header