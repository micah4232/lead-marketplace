import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import App from '../App';
import VerifyEmail from "../pages/Authentication/Verify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/activate/:uuid/:token/",
        element: <VerifyEmail />
    },
    {
        path: "/registration",
        element: <Registration />
    }
])

export default router