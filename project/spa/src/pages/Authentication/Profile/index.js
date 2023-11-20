import { useSelector } from "react-redux";
import NameHeader from "./partials/nameHeader";


export default function Profile() {
    const user = useSelector((state) => state.authentication.user)
    const company = useSelector((state) => state.authentication.company)
    return (
        <div className="w-full px-6 py-6 mx-auto drop-zone text-slate-500">
            <NameHeader />
            <div className="w-full p-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 xl:w-4/12">
                        <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <h6>Settings</h6>
                            </div>
                            <div className="flex-auto p-4">
                                <div className="font-bold leading-tight uppercase text-xs text-slate-500">
                                    <h6>Account</h6>
                                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                            <b>Phone Number</b>: +{company.phone_number}
                                        </li>
                                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}