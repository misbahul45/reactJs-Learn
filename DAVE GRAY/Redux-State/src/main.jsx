import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Counter from './features/counter/Counter.jsx'
import PostProject from './features/Post/Page/PostProject.jsx'
import { fecthUsers } from './features/Post/PostSlice/users/userSlice.jsx'
import SingglePost from './features/Post/PostSlice/elements/SingglePost.jsx'
import Layout from './features/Post/components/Layout.jsx'
import PostsList from './features/Post/PostSlice/elements/PostsList.jsx'
import AddPost from './features/Post/PostSlice/elements/AddPost.jsx'
import EditPost from './features/Post/PostSlice/elements/EditPost.jsx'

store.dispatch(fecthUsers())
const router = createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path: '/',
        element:<PostProject />
      },
      {
        path:'/post/:id',
        element:<SingglePost />
      },
      {
        path:'/post/edit/:id',
        element:<EditPost />
      },
      {
        path:'/newPost',
        element:<AddPost />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
