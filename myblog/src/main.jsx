import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouteProvider, Router} from 'react-router-dom'

// Páginas
import home from './routes/home.jsx'
import newPost from './routes/newPost.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <home />
      },
      {
        path: "/new",
        element: <newPost />
      }]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
