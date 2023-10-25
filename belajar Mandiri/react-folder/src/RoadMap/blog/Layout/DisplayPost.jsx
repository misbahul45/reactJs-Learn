import React, { useRef, Fragment, useEffect, useState } from 'react'
import CardPost from '../displayCard/CardPost'
import DisplayItems from '../element/DisplayItems'
import DisplayProdcutHome from '../displayCard/DisplayProdcutHome'
import Form from '../Part/Form'
const DisplayPost = (props) => {
  const { setPostItem, postItem,setReadMore, readMore,setGetId} = props
    const API_URL="http://localhost:3500/items"
    const [posts, setPosts] = useState([])
    const [timeLoad,setTimeLoad]=useState(3)
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[])
    const [displayForm,setDisplayForm]=useState(false)
    const loading=useRef(null)
    function getLoading(time, ref) {
      const displayLoading = setInterval(() => {
        time--;
        setTimeLoad(time--);
        if (time < 0) {
          clearInterval(displayLoading);
        }
        if (ref.current) {
          if(ref.current.textContent.length<=10){
            ref.current.innerHTML += ".";
          }
        }
      }, 1000);
      if(timeLoad==0){
        clearInterval(displayLoading)
      }
    }
    useEffect(() => {
      const getPostingan=async()=>{
        try{
          const response=await fetch(API_URL)
          const data=await response.json()
          setPostItem(data)
          setPosts(data)
        }catch(error){
          console.log(error)
        }
      }
      setTimeout(()=>{
        getPostingan()
      },3)
      getLoading(timeLoad,loading)
    },[])
    useEffect(()=>{
      setPosts(postItem)
    },[postItem])
    useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products))
    },[products])
    return (
      <div className="overflow-y-scroll scroll-smooth lg:h-[71vh] h-[65vh] no-scrollbar scroll-ms-4">
          <div className="px-3">
              {
              timeLoad==0?
                    posts.length==0?
                          <>
                            <Form display={displayForm} setDisplay={setDisplayForm} posts={postItem} setPosts={setPostItem} API_URL={API_URL}/>
                            <DisplayItems display={displayForm} setDisplay={setDisplayForm} content="Add Post" reverseContent="Cancel" />
                            <h1 className="text-5xl text-center mt-10 text-slate-600 opacity-75">No Post</h1>
                          </>
                          :
                          <>
                            <Form display={displayForm} setDisplay={setDisplayForm} posts={postItem} setPosts={setPostItem} API_URL={API_URL}/>
                          {
                            posts.map((post, index) => (
                            index % 2 === 0 && index >= 2 ? (
                              <Fragment key={post.id}>
                                <DisplayProdcutHome key={post.id+"-"+index} index={index} products={products} />
                                <CardPost PostItem={post} key={post.id+"1"} setReadMore={setReadMore} readMore={readMore} setGetId={setGetId} />
                              </Fragment>
                            ) : (
                              <CardPost PostItem={post} key={post.id} setReadMore={setReadMore} readMore={readMore} setGetId={setGetId} />
                            )
                          ))
                          }
                          <DisplayItems display={displayForm} setDisplay={setDisplayForm} content="Add Post" reverseContent="Cancel" />
                        </>
                  :
                <>
                <div className="flex flex-col items-center justify-center">
                    <img src="../../../public/img/loading.svg" alt="" />
                    <h1 ref={loading} className="text-orange-600 font-bold text-5xl font-serif">loading.</h1>
                </div>
                </>
              }
          </div>
      </div>
    )
}

export default DisplayPost