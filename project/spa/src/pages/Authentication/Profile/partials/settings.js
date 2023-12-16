import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import { useDispatch } from "react-redux";
import { storeCompany } from "../../reducers/authenticationSlice";
import { FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaRegCreditCard } from "react-icons/fa";

export default function Settings() {
    const auth = useSelector((state) => state.authentication)
    const dispatch = useDispatch()
    const [enableCalls, setEnableCalls] = useState(false)

    useEffect(() => {
        setEnableCalls(auth.company.enable_calls_to_number)
    }, [setEnableCalls])

    const payment = (type) => {
        switch(type) {
            case ('amazon-pay'):
                return <FaCcAmazonPay className="text-4xl"/>
            case ('amex'):
                return <FaCcAmex className="text-4xl" />
            case ('apple-pay'):
                return <FaCcApplePay className="text-4xl" />
            case ('dinners-club'):
                return <FaCcDinersClub className="text-4xl" />
            case ('discover'):
                return <FaCcDiscover className="text-4xl" />
            case ('jcb'):
                return <FaCcJcb className="text-4xl" />
            case ('master-card'):
                return <FaCcMastercard className="text-4xl" />
            case ('paypal'):
                return <FaCcPaypal className="text-4xl" />
            case ('stripe'):
                return <FaCcStripe className="text-4xl" />
            case ('visa'):
                return <FaCcVisa className="text-4xl" />
            default:
                return <FaRegCreditCard className="text-4xl" />
        }
    }

    return (
        <>
            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6>Settings</h6>
            </div>
            <div className="flex-auto p-4">
                <div className="font-bold leading-tight uppercase text-xs text-slate-500">
                    <h6>Account</h6>
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                            <b>Phone Number</b>: +{auth.company.phone_number}
                        </li>
                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                            <ToggleSwitch checked={enableCalls} label="Enable Calls to Number" onChange={() => { 
                                dispatch(storeCompany({
                                    ...auth.company,
                                    enable_calls_to_number : !auth.company_enable_calls_to_number
                                }))
                                setEnableCalls(!enableCalls)
                            }}/>
                        </li>
                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                            <b>Payment Method</b>
                            <div className="flex content-center item-center">
                                { payment(auth.company.payment_method.brand) } <span className="mt-3 ml-5">{ `**** **** **** ${auth.company.payment_method.last4} ${auth.company.payment_method.exp_month}/${auth.company.payment_method.exp_year}` }</span><span></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}