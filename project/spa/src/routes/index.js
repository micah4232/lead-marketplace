import { createBrowserRouter, useRoutes } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import VerifyEmail from "../pages/Authentication/Verify";
import Application from "../pages/Application";
import Dashboard from "../pages/Application/pages/Dashboard";
import ClientsAccount from "../pages/Application/pages/ClientsAccount";
import Leads from "../pages/Application/pages/Leads";
import Campaigns from "../pages/Application/pages/Campaigns";
import Profile from "../pages/Authentication/Profile";

const router = createBrowserRouter([
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
        path: "app/",
        element: <Application />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "clients-account",
                element: <ClientsAccount/>
            },
            {
                path: "leads",
                element: <Leads />
            },
            {
                path: "campaigns",
                element: <Campaigns />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
    
])

export default router