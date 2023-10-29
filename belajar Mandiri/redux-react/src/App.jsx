import { useState } from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./components/elements/layout/layout"
import ErrorPage from "./components/pages/ErrorPage"
import Home from "./components/pages/Home"
import SubmitArticle from "./components/pages/SubmitArticle"
function App() {
  const [open,setOpen]=useState(true)
  const[clickSideBar,setClickSideBar]=useState("feed")
  const router=createBrowserRouter([
    {
      element:<Layout open={open} setOpen={setOpen} clickSideBar={clickSideBar} setClickSideBar={setClickSideBar} />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home open={open} />
        },
        {
          path:'/submitarticle',
          element:<SubmitArticle open={open} setClickSideBar={setClickSideBar} />
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App
