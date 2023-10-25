import DisplayPost from './Layout/DisplayPost'
import React,{useRef,useEffect,useState} from 'react'
import DisplayReadMore from './Layout/DisplayReadMore'
const Home = () => {
  const [posts,setPosts]=useState([])
  const [readMore,setReadMore]=useState(false)
  const [getId,setGetId]=useState('')
  const [edit,setEdit]=useState(false)

  return(
      <>
        {
        readMore?
          <DisplayReadMore edit={edit} setEdit={setEdit} posts={posts} setPosts={setPosts}  getId={getId} setReadMore={setReadMore} readMore={readMore} />
        :
          <DisplayPost setPostItem={setPosts} postItem={posts} readMore={readMore} setReadMore={setReadMore} setGetId={setGetId} />
        }
      </>
  )
}

export default Home