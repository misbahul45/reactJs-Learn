import { useEffect, useState } from "react"
import Auth from "./components/Auth"
import { db,auth } from "./config/firebase"
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
function App() {
  const [movieList, setMovieList] = useState([])
  const [newMovieTitle,setNewMovieTitle]=useState('')
  const [newReleaseDate,setNewReleasedate]=useState()

  const movieCollectionRef=collection(db, "movies")
  const getMoveiList=async()=>{
    //read data from database
    try{
      const data=await getDocs(movieCollectionRef)
      const filterData=data.docs.map((doc)=>(
        {
        ...doc.data(),
        id:doc.id
        }
      ))
        setMovieList(filterData)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getMoveiList()
  },[])

  const handleAddMovie=async()=>{
    await addDoc(movieCollectionRef,{
      title:newMovieTitle,
      releaseDate:newReleaseDate,
      userId:auth?.currentUser?.uid
    })
    getMoveiList()
  }

  const handleDeleteMovie=async(id)=>{
    const movieDelete=doc(db,"movies",id)
    await deleteDoc(movieDelete)
    getMoveiList()
  }
  return (
   <main className="flex flex-col justify-center">
    <Auth />
    <div>
      <h1 className="text-center text-6xl py-10">New Movie</h1>
      <form className="flex flex-col w-full max-w-xs gap-3 mx-auto">
        <input
          className="pl-5 py-1 border-2 border-blue-600 rounded-md  outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setNewMovieTitle(e.target.value)}
        type="text" placeholder="Title....." />
        <input
          className="pl-5 py-1 border-2 border-blue-600 rounded-md  outline-none focus:ring-2 focus:ring-blue-500"
        type="text" placeholder="Release date..."onChange={(e)=>setNewReleasedate(Number(e.target.value))}  />
        <button
        onClick={handleAddMovie}
        className="py-1 bg-orange-600 text-white rounded-lg"
        type="button">Add new Movie</button>
      </form>
    </div>

    <div className="mt-8 grid grid-cols-[repeat(3,minmax(250px,1fr))] gap-3">
    {
      movieList.map((movie)=>(
          <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <h1>{movie.title}</h1>
            <h1>{movie.releaseDate}</h1>
            <button
            onClick={()=>handleDeleteMovie(movie.id)}
            className="text-white px-4 py-1 bg-red-500">Delete</button>
          </div>
      ))
    }
    </div>
   </main>
  )
}

export default App
