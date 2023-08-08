import { useDispatch, useSelector } from "react-redux"
import { storeUser, storeCompany } from "../../reducers/authenticationSlice"
import { useState } from "react"

function PersonalInfo() {
    const user = useSelector((state) => state.authentication.user)
    const company = useSelector((state) => state.authentication.company)
    const [registerUser, setRegisterUser] = useState({
        ...user,
        password: '',
        confirm: ''
    })
    const [registerCompany, setRegisterCompany] = useState({...company})
    const dispatch = useDispatch()
    return (
        <>
            <form action="#" className="mt-10">
                <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Personal Information</h3>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                        <input type="text" name="company_name" id="company_name" value={registerCompany.name} onChange={(event) => { setRegisterCompany({...registerCompany, name: event.target.value}); dispatch(storeCompany(registerCompany)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Company" />
                    </div>
                    <div>
                        <label for="company_website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Website</label>
                        <input type="text" name="company_website" id="company_website" value={registerCompany.website} onChange={(event) => { setRegisterCompany({...registerCompany, website: event.target.value}); dispatch(storeCompany(registerCompany)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Website" />
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name="first_name" id="first_name" value={registerUser.first_name} onChange={(event) => { setRegisterUser({...registerUser, first_name: event.target.value});dispatch(storeUser(registerUser)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name="last_name" id="last_name" value={registerUser.last_name} onChange={(event) => { setRegisterUser({...registerUser, last_name: event.target.value});dispatch(storeUser(registerUser)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Last Name" />
                    </div>
                    <div>
                        <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" id="username" value={registerUser.username} onChange={(event) => { setRegisterUser({...registerUser, username: event.target.value});dispatch(storeUser(registerUser)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username.example" required="" />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" value={registerUser.email} onChange={(event) => { setRegisterUser({...registerUser, email: event.target.value});dispatch(storeUser(registerUser)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" value={registerUser.password} onChange={(event) => { setRegisterUser({...registerUser, password: event.target.value});dispatch(storeUser(registerUser)) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" />
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" value={registerUser.confirm} onChange={(event) => { setRegisterUser({...registerUser, confirm: event.target.value});dispatch(storeUser({...registerUser, confirm: event.target.value})) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" />
                        <p className={registerUser.password !== registerUser.confirm ? "text-red-700 text-xs ml-2" : "hidden"}>password did not match</p>
                    </div>
                </div>
                <p className="small text-center text-muted">By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            </form>
        </>
    )
}

export default PersonalInfo