import { Sidebar } from "flowbite-react"
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SideNavBar () {
    return (
        <Sidebar className="bg-red-500">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                <Sidebar.Item
                    href="#"
                    icon={HiChartPie}
                >
                    <p>
                    Dashboard
                    </p>
                </Sidebar.Item>
                <Sidebar.Item
                    href="#"
                    icon={HiInbox}
                >
                    <p>
                    Clients Account
                    </p>
                </Sidebar.Item>
                <Sidebar.Item
                    href="#"
                    icon={HiUser}
                >
                    <p>
                    Leads
                    </p>
                </Sidebar.Item>
                <Sidebar.Item
                    href="#"
                    icon={HiShoppingBag}
                >
                    <p>
                    Campaigns
                    </p>
                </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideNavBar