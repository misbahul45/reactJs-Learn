import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectState from './RoadMap/hooks/ExpandTracker.jsx'
import HomeForm from './RoadMap/hooks/Form.jsx'
import NoteApp from './RoadMap/hooks/NoteApp.jsx'
import OpsidianClone from './RoadMap/hooks/OpsidianClone.jsx'
import Blog from './RoadMap/hooks/blog.jsx'
import RandomText from './RoadMap/hooks/RandomText.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './redux/storeRedux/store.jsx'
import { Provider } from 'react-redux'
 const router = createBrowserRouter([
   {
     path: '/',
     element: <App />
   },{
     path: '/app',
     element: <ProjectState />
   },{
     path: '/Form',
     element: <HomeForm />
   },{
     path: '/NoteApp',
     element: <NoteApp />
   },{
     path: '/OpsidianClone',
     element: <OpsidianClone />
   },{
     path: '/Blog',
     element: <Blog />
   },{
     path: '/random',
     element: <RandomText />
   }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
