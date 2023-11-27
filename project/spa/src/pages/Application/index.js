import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import SideNavBar from "./components/SideNavBar";
import { getProfileMe } from "./api";
import { useDispatch } from "react-redux";
import { storeCompany, storeUser } from "../Authentication/reducers/authenticationSlice";

function Application() {
    const auth = useSelector((state) => state.authentication)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.token === '') {
            navigate('/')
        } else {
            getProfileMe(auth.token).then(response => {
                const data = response.data;
                dispatch(storeUser({
                    ...auth.user,
                    id : data.id,
                    email : data.email,
                    username : data.username,
                    first_name : data.first_name,
                    last_name : data.last_name
                }));
                dispatch(storeCompany({
                    ...auth.company,
                    id : data.company.id,
                    name : data.company.name,
                    website : data.company.website,
                    phone_number : data.company.phone_number_for_lead,
                    enable_calls_to_number : data.company.enable_calls_to_number,
                    payment_method: data.company.payment_method
                }))
            }).catch(error => {
                console.log(error)
            })
        }
    },[navigate,auth.token, dispatch, storeUser, storeCompany]);

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