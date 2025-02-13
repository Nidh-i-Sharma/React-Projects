import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'


const router = createBrowserRouter([
  {
    path :'/',
    element:<Layout/>,
    children:[
      {
        path :'/',
        element:<Home/>,
      },
      {
        path :'/about',
        element:<About/>,
      },
      {
        path :'/services',
        element:<Github/>,
      },
      {
        path :'/contact',
        element:<Contact/>,
      }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router = {router} /> 
  </StrictMode>
)
