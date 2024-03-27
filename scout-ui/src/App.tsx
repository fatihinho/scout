import Root from "./pages/Root/Root.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Login from "./pages/Login/Login.tsx";

function ProtectedRootRoutes() {
  const isLoggedIn = sessionStorage.getItem("user") != null;
  return isLoggedIn ? <Root/> : <Navigate to="/login" replace/>;
}

function ProtectedLoginRoutes() {
  const isLoggedIn = sessionStorage.getItem("user") != null;
  return isLoggedIn ? <Navigate to="/" replace/> : <Login/>;
}

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <ProtectedLoginRoutes/>,
    },
    {
      element: <ProtectedRootRoutes/>,
      children: [
        {
          index: true,
          path: "/",
          element: <Root/>
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/settings",
          element: <Settings/>
        }
      ],
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
);


export default function App() {
  return <RouterProvider router={router}/>;
}