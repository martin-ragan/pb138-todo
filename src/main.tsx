import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TaskDetail } from './routes/TaskDetail';
import { Tasks } from './routes/Tasks';
import { About } from './routes/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Tasks/>
      },
      {
        path: "/:id",
        element: <TaskDetail />,
      },
    ]
  },
  {
    path: "/about",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
