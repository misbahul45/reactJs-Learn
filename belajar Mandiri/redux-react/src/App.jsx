import { useState } from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./components/elements/layout/layout"
import ErrorPage from "./components/pages/ErrorPage"
import Home from "./components/pages/Home"
function App() {
  const [open,setOpen]=useState(true)
  const router=createBrowserRouter([
    {
      element:<Layout open={open} setOpen={setOpen} />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home open={open} />
        },
      ]
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App
