import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useSelector } from "react-redux";

function TopNavigation () {
    const user = useSelector((state) => state.authentication.user)

    return (
        <Navbar fluid className="bg-[#F8F9FE]">
            <Navbar.Brand>
                <img className="w-8 mr-2" src="https://www.cyberdepot.us/wp-content/uploads/2023/01/analytics-outline.svg" />
                <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white">
                    CyberDepot Lead Marketplace
                </span> 
            </Navbar.Brand> 
        </Navbar>
    )
}
export default TopNavigation