import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import Layout from './Layout';
import EditPost from './EditPost';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState,useEffect } from "react" 
import Api from './Api/posts';
import useWindowSize from './hooks/useWindowSize';
import DataProvider from './context/Data.Context';
function App() {
  const [posts, setPosts]=useState([])
  const [search, setSearch]=useState('')
  const [searchResults, setSearchResults]=useState([])
  const [posTitle, setPosTitle]=useState('')
  const [postBody, setPostBody]=useState('')
  const [navName, setNavName]=useState('Home')
  
  const { width }=useWindowSize()

  useEffect(()=>{
    const featchPosts=async()=>{
      try{
        const response= await Api.get('') 
        setPosts(response.data)
      }catch(err){
        console.log(err)
      }
    }

    setTimeout(()=>{
     featchPosts() 
    },1000)
  },[])
  console.log(posts)
  useEffect(()=>{
    const filteredResult=posts.filter((post)=>(
      (post.title).toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase())
    ))
    setSearchResults(filteredResult)
  },[posts,search])
  const router=createBrowserRouter([
    {
      element: <Layout search={search} setSearch={setSearch} navName={navName} setNavName={setNavName} width={width}/>,
      children:[
        {
          path:'/',
          element:<Home posts={posts} searchResults={searchResults} />
        },{
          path:'/about',
          element:<About/>
        },{
  
        },{
          path:'/post',
          element:<NewPost postBody={postBody} setPostBody={setPostBody} posTitle={posTitle} setPosTitle={setPosTitle} posts={posts} setPosts={setPosts} />
        },{
          path:'/post/:id',
          element:<PostPage posts={posts}  setPosts={setPosts}/>
        },{
          path:'/edit/:id',
          element:<EditPost posts={posts} setPosts={setPosts}/>
        },{
          path:'*',
          element:<Missing/>
        }
      ]
    }
  ])

  return (
    <DataProvider>
      <RouterProvider router={router}/>
    </DataProvider>
  )
}

export default App
