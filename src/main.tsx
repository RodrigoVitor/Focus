import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/index.tsx'
import { CreateMyTask } from './pages/addTasks/createMyTask.tsx'
import { EditMyTask } from './pages/editTask/editMyTask.tsx'
import { Gifts } from './pages/gifts/index.tsx'
import { AddGifts } from './pages/addGifts/index.tsx'
import { EditGift } from './pages/editGift/index.tsx'
import { MyGifts } from './pages/myGifts/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adicionar-tarefas",
        element: <CreateMyTask />,
      },
      {
        path: "/editar-tarefa/:task/:stars",
        element: <EditMyTask />
      },
      {
        path:"/presentes",
        element: <Gifts />
      },
      {
        path:"/adicionar-presentes",
        element: <AddGifts />
      },
      {
        path: "/editar-presente/:gift/:stars",
        element: <EditGift />
      },
      {
        path: "/meus-presentes",
        element: <MyGifts />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
