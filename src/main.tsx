import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/index.tsx'
import { CreateMyTask } from './pages/addTasks/createMyTask.tsx'
import { EditMyTask } from './pages/editTask/editMyTask.tsx'

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
