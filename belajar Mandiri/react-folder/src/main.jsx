import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectState from './RoadMap/hooks/ExpandTracker.jsx'
import HomeForm from './RoadMap/hooks/Form.jsx'
import NoteApp from './RoadMap/hooks/NoteApp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
   }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
