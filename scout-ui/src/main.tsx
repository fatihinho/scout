import './index.css';
import '@fontsource/roboto/300.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App.tsx";
import Login from "./pages/Login/Login.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Settings from "./pages/Settings/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
