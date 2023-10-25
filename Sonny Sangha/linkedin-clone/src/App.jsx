import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
function App() {

  const router=createBrowserRouter([{
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<div className="h-full w-full bg-gray-500">Hallo</div>
      }
    ]
  }])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
