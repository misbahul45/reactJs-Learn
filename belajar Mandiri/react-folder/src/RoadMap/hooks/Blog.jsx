import React from 'react'
import Header from '../blog/Part/Header'
import Home from '../blog/Home'
import Footer from '../blog/Part/Footer'
const Blog = () => {
  return (
    <div className=" relative w-full max-w-4xl mx-auto flex flex-col h-screen">
       <Header/>
       <main>
         <Home/>
       </main>
       <Footer/>
    </div>
  )
}

export default Blog