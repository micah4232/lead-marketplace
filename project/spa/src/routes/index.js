import { createBrowserRouter, useRoutes } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import App from '../App';
import VerifyEmail from "../pages/Authentication/Verify";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App />
    // },
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/activate/:uuid/:token/",
        element: <VerifyEmail />
    },
    {
        path: "/registration",
        element: <Registration />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])

export default router