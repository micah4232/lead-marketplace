import { Sidebar } from "flowbite-react"
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { NavLink } from "react-router-dom";

function SideNavBar () {
    return (
        <Sidebar className="bg-red-500">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                <Sidebar.Item
                    icon={HiChartPie}
                >
                    <NavLink to="">Dashboard</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={HiInbox}
                >
                    <NavLink to="clients-account">Clients Account</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={HiUser}
                >
                    <NavLink to="leads">Leads</NavLink>
                </Sidebar.Item>
                <Sidebar.Item
                    icon={HiShoppingBag}
                >
                    <NavLink to="campaigns">
                    Campaigns
                    </NavLink>
                </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideNavBar