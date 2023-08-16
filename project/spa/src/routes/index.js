import { createBrowserRouter, useRoutes } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import App from '../App';
import VerifyEmail from "../pages/Authentication/Verify";
import Application from "../pages/Application";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App />
    // },
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "activate/:uuid/:token/",
        element: <VerifyEmail />
    },
    {
        path: "registration",
        element: <Registration />
    },
    {
        path: "app",
        element: <Application />
    }
    
])

export default router