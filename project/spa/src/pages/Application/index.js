import { useEffect } from "react"
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import SideNavBar from "./components/SideNavBar";

function Dashboard() {
    const isRegistering = useSelector((state) => state.authentication.isRegistering)
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === true && isRegistering === false) {
            // console.log('samoka')
            navigate('/')
        }
    }, []);
    return (
        <>
            <div className="w-full">
                <TopNavigation className="bg-purple-500" />
                <div className="grid grid-cols-6 gap-4 h-screen">
                    <div className="">
                        <SideNavBar />
                    </div>
                    <div className="col-span-5 bg-white">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard