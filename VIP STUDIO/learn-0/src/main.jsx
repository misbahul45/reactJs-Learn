import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import ErorPage from './pages/404.jsx';
import ProductPages from './pages/productsPage.jsx';
import Home from './pages/home';
const couter=createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    errorElement:<ErorPage />
  }
  ,{
    path:"/login",
    element:<LoginPage />
  },
  {
    path:"/register",
    element:<RegisterPage />
  },
  {
    path:"\products",
    element:<ProductPages />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={couter} />
  </React.StrictMode>,
)
