import { useEffect, useState } from "react"
import PersonalInfo from "./partials/PersonalInfo"
import CustomerInfo from "./partials/CustomerInfo";
import YourSettings from "./partials/YourSettings";
import AccountInfo from "./partials/AccountInfo";
import { useSelector } from "react-redux";

import { RegisterAPI, GetMainCategories, CreateBulkBid, UpdateCompany } from "./api";
import { storeMainCategories } from "../reducers/categoriesReducer";
import { useDispatch } from "react-redux";
import { storeIsRegistering, storeIsVerified, storeLoggedIn, storeStep, storeUser } from "../reducers/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { onAlertShow } from "../../../components/reducers/componentSlice";

function Registration() {
    const user = useSelector((state) => state.authentication.user);
    const steps = useSelector((state) => state.authentication.step);
    const isVerified = useSelector((state) => state.authentication.isVerified)
    const company = useSelector((state) => state.authentication.company)
    const selectedServices = useSelector((state) => state.category.selectedServices)
    const [bulkSaved, setBulkSaved] = useState(false)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const buttonString = () => {

        let butt = 'Next'

        if (steps === 0 && user.id === undefined) {
            butt = 'Create User'
        }

        if (steps === 0 && user.id !== undefined && isVerified === false) {
            butt = 'Verify'
        }

        return butt
    }

    const onClickButton = (payload) => {
        // store payload?
        let istep = steps;
        
        if (istep === 0) {
            console.log('step 0')
            if (user.id === undefined) {
                RegisterAPI({...user, company: {...company}}).then(response => {
                    if (response.status === 201) {
                        dispatch(storeUser({
                            id: response.data.id,
                            email: response.data.email,
                            username: response.data.username,
                            first_name: user.first_name,
                            last_name: user.last_name
                        }))
                        
                        dispatch(storeIsRegistering(true));
                        // dispatch(storeIsVerified(true));
                    }
                }).catch(error => {
                    if (error.response.data.website) {
                        dispatch(onAlertShow({
                            show:true,
                            alert: 'error',
                            message: error.response.data.website[0]
                        }))
                    } else {
                        dispatch(onAlertShow({
                            show:true,
                            alert: 'error',
                            message: error.response.data
                        }))
                    }
                    
                });
            }

            if (isVerified) {
                dispatch(storeStep(istep + 1))
            }
        }
        if (steps === 1) {
            // linking categories to your company
            dispatch(storeStep(istep + 1))
        }
        if (steps === 2) {
            if (company.phone_number === '') {
                dispatch(onAlertShow({
                    show:true,
                    alert: 'error',
                    message: 'You have not entered your Phone number'
                }))
            } else if (selectedServices.length === 0) {
                dispatch(onAlertShow({
                    show: true,
                    alert: 'error',
                    message: 'You have no Services Selected, please select services Thank you'
                }))
            } else {
                // save to database.
                CreateBulkBid(selectedServices, company.id).then(response => {
                    setBulkSaved(true)
                }).catch(error => {
                    dispatch(onAlertShow({
                        show: true,
                        alert: 'error',
                        message: 'Bid did not save to database.'
                    }))
                })
                // save phone and enable_phone number
                UpdateCompany(company).then(response => {
                    console.log(response.data)
                }).catch(error => {
                    dispatch(onAlertShow({
                        show: true,
                        alert: 'error',
                        message: 'Updating company failed!'
                    }))
                })
                dispatch(storeStep(istep + 1))
            }

        }
        if (steps === 3) {
            dispatch(storeIsRegistering(false));
            dispatch(storeLoggedIn(true))
            navigate('/app')
        }
    }

    const onClickBack = () => {
        dispatch(storeStep(steps - 1))
    }

    return (
        <div className="mt-20" style={{width: 800}}>
            <div className="">
                <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base bg-[#D4DAF9] p-10">
                    <li className={(steps === 0) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (steps === 0) ? <span class="mr-2">1</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Create <span class="hidden sm:inline-flex sm:ml-2">Account</span>
                        </span>
                    </li>
                    <li className={(steps < 2) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (steps < 2) ? <span class="mr-2">2</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Customers <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                    <li className={(steps < 3) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (steps < 3) ? <span class="mr-2">3</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Settings <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                    <li className={(steps < 4) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (steps < 4) ? <span class="mr-2">4</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Account <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                </ol>
                <div className="bg-white p-5 border-1">
                    {
                        (steps === 0) && <PersonalInfo />
                    }
                    {
                        (steps === 1) && <CustomerInfo />
                    }
                    {
                        (steps === 2) ? <YourSettings /> : ''
                    }
                    {
                        (steps === 3) ? <AccountInfo /> : ''
                    }
                    <div className="text-right pt-10">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClickButton}>
                            {buttonString()}
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Registration