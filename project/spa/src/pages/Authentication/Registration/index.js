import { useState } from "react"
import PersonalInfo from "./partials/PersonalInfo"
import CustomerInfo from "./partials/CustomerInfo";
import YourSettings from "./partials/YourSettings";
import AccountInfo from "./partials/AccountInfo";
import { useSelector } from "react-redux";

import { RegisterAPI } from "./api";

function Registration() {
    const user = useSelector((state) => state.authentication.user);
    const company = useSelector((state) => state.authentication.company)
    const [step, setStep] = useState(0);
    const onClickButton = (payload) => {
        // store payload?
        let istep = step;
        
        if (istep === 0) {
            RegisterAPI({...user, company: {...company}}).then(response => {
                console.log(response.data);
                if (response.status === 201) {
                    setStep(istep + 1)
                }
            }).catch(error => {
                console.log('Have some error here!')
            });
        }
    }

    const onClickBack = () => {
        let istep = step;
        setStep(istep - 1);
    }

    return (
        <div className="mt-20" style={{width: 800}}>
            <div className="">
                <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base bg-[#D4DAF9] p-10">
                    <li className={(step === 0) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (step === 0) ? <span class="mr-2">1</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Create <span class="hidden sm:inline-flex sm:ml-2">Account</span>
                        </span>
                    </li>
                    <li className={(step < 2) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (step < 2) ? <span class="mr-2">2</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Customers <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                    <li className={(step < 3) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (step < 3) ? <span class="mr-2">3</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Settings <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                    <li className={(step < 4) ? "flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : "text-blue-600 flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}>
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                (step < 4) ? <span class="mr-2">4</span> : <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            }
                            Account <span class="hidden sm:inline-flex sm:ml-2"></span>
                        </span>
                    </li>
                </ol>
                <div className="bg-white p-5 border-1">
                    {
                        (step === 0) ? <PersonalInfo /> : ''
                    }
                    {
                        (step === 1) ? <CustomerInfo /> : ''
                    }
                    {
                        (step === 2) ? <YourSettings /> : ''
                    }
                    {
                        (step === 3) ? <AccountInfo /> : ''
                    }
                    <div className="text-right pt-10">
                        {
                            (step > 0) ? <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-5" onClick={onClickBack}>
                            Back
                        </button> : null
                        }
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClickButton}>
                            Create User
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Registration