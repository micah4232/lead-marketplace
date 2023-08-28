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
            {/* <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">
                        { user.first_name } { user.last_name }
                        </span>
                        <span className="block truncate text-sm font-medium">
                        {user.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Logout
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div> */}
        </Navbar>
    )
}

export default TopNavigation