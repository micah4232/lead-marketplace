import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import SideNavBar from "./components/SideNavBar";
import { getProfileMe } from "./api";
import { useDispatch } from "react-redux";
import { storeUser } from "../Authentication/reducers/authenticationSlice";

function Application() {
    const auth = useSelector((state) => state.authentication)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.token === '') {
            navigate('/')
        } else {
            getProfileMe(auth.token).then(response => {
                dispatch(storeUser({
                    ...auth.user,
                    id : response.data.id,
                    email : response.data.email,
                    username : response.data.username
                }))
            }).catch(error => {

            })
        }
    },[navigate,auth.token]);

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