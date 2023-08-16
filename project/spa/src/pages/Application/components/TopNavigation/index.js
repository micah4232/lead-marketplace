import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useSelector } from "react-redux";

function TopNavigation () {
    const user = useSelector((state) => state.authentication.user)

    return (
        <Navbar fluid>
            <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Awesome App
            </span> 
            </Navbar.Brand>
            <div className="flex md:order-2">
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
            </div>
        </Navbar>
    )
}

export default TopNavigation