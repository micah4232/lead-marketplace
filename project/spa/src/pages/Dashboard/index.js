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
                <TopNavigation />
                <SideNavBar />
            </div>
        </>
    )
}

export default Dashboard