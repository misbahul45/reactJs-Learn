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

store.dispatch(fecthUsers())
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },  
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/PostProject',
    element: <PostProject />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
