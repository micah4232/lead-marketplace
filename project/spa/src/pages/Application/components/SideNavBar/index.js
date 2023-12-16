import { Sidebar } from "flowbite-react"
import { MdStore, MdReduceCapacity, MdLeaderboard, MdCampaign, MdOutlineAccountCircle, MdLogout } from 'react-icons/md'
import { useLocation, NavLink } from "react-router-dom";

import { sideBarTheme } from "./theme";

function SideNavBar () {
    const location = useLocation()
    return (
        <Sidebar theme={sideBarTheme}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                <Sidebar.Item
                    // href="/app"
                    icon={MdStore}
                    className={location.pathname === '/app' ? "bg-white drop-shadow-md" : ""}
                >
                    <NavLink to="">Dashboard</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={MdReduceCapacity}
                    // href="/app/clients-account"
                    className={location.pathname === '/app/clients-account' ? "bg-white drop-shadow-md" : ""}
                >
                    {/* Clients Account */}
                    <NavLink to="clients-account">Clients Account</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={MdLeaderboard}
                    // href="/app/leads"
                    className={location.pathname === '/app/leads' ? "bg-white drop-shadow-md" : ""}
                >
                    <NavLink to="leads">Leads</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={MdCampaign}
                    // href="/app/campaigns"
                    className={location.pathname === '/app/campaigns' ? "bg-white drop-shadow-md" : ""}
                >
                    <NavLink to="campaigns">Campaigns</NavLink>
                </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                    icon={MdOutlineAccountCircle}
                    >
                        <NavLink to="profile" >Profile</NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item
                    icon={MdLogout}
                    >
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideNavBar