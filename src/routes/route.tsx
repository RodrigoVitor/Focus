import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AddGifts } from "../pages/addGifts";
import { CreateMyTask } from "../pages/addTasks/createMyTask";
import { EditGift } from "../pages/editGift";
import { EditMyTask } from "../pages/editTask/editMyTask";
import { Gifts } from "../pages/gifts";
import { Home } from "../pages/home";
import { MyGifts } from "../pages/myGifts";

export const router = createBrowserRouter([
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