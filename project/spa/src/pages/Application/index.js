import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import SideNavBar from "./components/SideNavBar";

function Application() {
    const isRegistering = useSelector((state) => state.authentication.isRegistering)
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false || isLoggedIn === undefined) {
            navigate('/')
        }
    },[]);

    return (
        <>
            <div className="w-full">
                <TopNavigation />
                <div className="grid grid-cols-6 gap-4 h-screen">
                    <div>
                        <SideNavBar />
                    </div>
                    <div className="col-span-5 bg-[#F8F9FE]">
                        {/* displays the child */}
                        <div className="m-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application