import React from 'react'
import Feed from './components/Feed'
const Home = ({ posts,searchResults}) => {
  return (
    <main className="w-full h-full max-w-xl mx-auto py-1">
        {posts.length>0?
          searchResults.length>0?
          <Feed posts={searchResults}/>
          :
          <Feed posts={posts}/>
        :
        <h1 className="text-slate-800 font-bold font-serif text-3xl capitalize text-center opacity-50 ">No Post To Display</h1>
        }
    </main>
  )
}

export default Home