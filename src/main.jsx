import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ModelSPage from './pages/ModelSPage.jsx'
import ModelXPage from './pages/ModelXPage.jsx'
import CybertruckPage from './pages/CybertruckPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path:'/',
    element:(
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path:'/model_s',
    element:
      <App>
        <ModelSPage />
      </App>,
  },
  {
    path:'/model_x',
    element:
      <App>
        <ModelXPage />
      </App>,
  },
  {
    path:'/cybertruck',
    element:
      <App>
        <CybertruckPage />
      </App>,
  },
  {
    path:'/shop',
    element:
      <App>
        <ShopPage />
      </App>,
  },
  {
    path:'/cart',
    element:
      <App>
        <CartPage />
      </App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
