import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import ErorPage from './pages/404.jsx';
import ProductPages from './pages/productsPage.jsx';
import Home from './pages/home';
import profile from './pages/profile';
import detailProduct from './pages/detailProduct';
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
  },
  {
    path:"/profile",
    element:<profile />
  },
  {
    path:"/product/:id",
    element:<detailProduct />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={couter} />
  </React.StrictMode>,
)
