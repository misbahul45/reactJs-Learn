import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { ReduxStore } from './App/store.jsx'
import { getPost } from './App/ActionSlice.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Project1 from './Page/Project1.jsx'
import Project2 from './Page/project2.jsx'
import Layout from './layout/Layout.jsx'



  ReduxStore.dispatch(getPost())

  const router=createBrowserRouter(
    [
      {
        element:<Layout />,
        children:[
          {
            path:"/",
            element:<Project1 />
          },{
            path:"/project1",
            element:<Project1 />
          },
          {
            path:"/project2",
            element:<Project2 />
          }
        ]
      }
    ]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={ReduxStore} >
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
