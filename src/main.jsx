import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ModelSPage from './pages/ModelSPage.jsx'
import ModelXPage from './pages/ModelXPage.jsx'
import CybertruckPage from './pages/CybertruckPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage />,
  },
  {
    path:'/model_s',
    element:<ModelSPage />,
  },
  {
    path:'/model_x',
    element:<ModelXPage />,
  },
  {
    path:'/cybertruck',
    element:<CybertruckPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
