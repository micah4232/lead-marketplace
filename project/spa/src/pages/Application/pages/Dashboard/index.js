import { useSelector } from "react-redux"
import LeadsDataTable from "../../../../components/LeadsDataTable"
import CampaignCard from "./components/CampaignCard"
import StatementCard from "./components/StatementCard"
import TotalCard from "./components/TotalCard"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { getCampaignList } from "../Campaigns/api"


function Dashboard() {
    const auth = useSelector((state) => state.authentication)
    const [campaigns, setCampaigns] = useState([])
    const headers = [
        '',
        'Date',
        'Progress',
        'Company Name',
        'Campaigns',
        'Name / Caller ID',
        'Contact Details',
        'Duration',
        'Cost',
        'Revenue'
    ]
    const data = [
        {
            'action' : '',
            'date' : '4:37pm 07/17/23',
            'progress' : 'Unmanaged',
            'company_name' : 'Home Alliance',
            'campaigns' : 'Marketplace - Heating - LA',
            'name_caller_id' : '(347) 301-0172',
            'contact_details' : 'ROXINE HELBERG',
            'duration' : '1:39',
            'cost' : '$65.00',
            'revenue' : ''
        }
    ]
    useEffect(() => {
        // get all campaigns here
        getCampaignList(auth.token, auth.company.id).then(response => {
            if (response.status === 200) {
                setCampaigns(response.data)
            }
        })
    }, [])
    return (
        <>
            <h2 className="mb-10 text-4xl font-bold">Welcome { auth.company.name }</h2>
            {/* Total Stats Here */}
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <TotalCard total="2" type="Lead Marked for Follow up" />
                </div>
                <div>
                    <TotalCard total="2.5k" type="Billable Leads All Time" />
                </div>
                <div>
                    <TotalCard total="404" type="Billable Leads last 90 Days" />
                </div>
                <div>
                    <TotalCard total="404" type="Billable Leads last 90 Days" />
                </div>
            </div>
            {/* List of Leads Here */}
            <div className="border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable">
                <h1 className="text-xl font-bold p-4">Leads Manager</h1>
                <div className="mx-5 my-5">
                    <LeadsDataTable headers={headers} data={data}/>
                    <div className="flex justify-between mb-5 p-5">
                        <p className="mt-5"><strong>Want more Leads?</strong> Increase the Cost Per Lead in your Campaign Manager</p>
                        <button className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs draggable mb-4 float-right">View All Leads</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Current Balance Here */}
                <div className="mt-10 p-3 border-black/12.5 drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable">
                    <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                    <div className="flex flex-wrap -mx-3">
                        <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                            <h6 className="mb-0">Current Balance</h6>
                        </div>
                        <div className="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                            <i className="mr-2 far fa-calendar-alt" aria-hidden="true"></i>
                            <small>23 - 38 March 2020</small>
                        </div>
                    </div>
                </div>
                <div className="flex-auto p-4 pt-6">
                    <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">Newest</h6>
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 rounded-xl p-1 tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                                    <FaArrowDown className="text-sm" />
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">Netflix</h6>
                                    <span className="leading-tight text-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-red text-sm bg-clip-text">- $ 2,500</p>
                            </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 rounded-xl p-1 tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border-1 border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                    <FaArrowUp className="text-sm" />
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">Apple</h6>
                                    <span className="leading-tight text-xs">27 March 2020, at 04:30 AM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-lime text-sm bg-clip-text">+ $ 2,000</p>
                            </div>
                        </li>
                    </ul>
                    <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Yesterday</h6>
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                    <FaArrowUp className="text-sm" />
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">Stripe</h6>
                                    <span className="leading-tight text-xs">26 March 2020, at 13:45 PM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-lime text-sm bg-clip-text">+ $ 750</p>
                            </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                    <i className="fas fa-arrow-up text-3xs" aria-hidden="true"></i>
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">HubSpot</h6>
                                    <span className="leading-tight text-xs">26 March 2020, at 12:30 PM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-lime text-sm bg-clip-text">+ $ 1,000</p>
                            </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                    <i className="fas fa-arrow-up text-3xs" aria-hidden="true"></i>
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">Creative Tim</h6>
                                    <span className="leading-tight text-xs">26 March 2020, at 08:30 AM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="relative z-10 items-center inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-lime text-sm bg-clip-text">+ $ 2,500</p>
                            </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-size-inherit rounded-xl">
                            <div className="flex items-center">
                                <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                                    <i className="fas fa-exclamation text-3xs" aria-hidden="true"></i>
                                </button>
                                <div className="flex flex-col">
                                    <h6 className="mb-1 leading-normal text-sm text-slate-700">Webflow</h6>
                                    <span className="leading-tight text-xs">26 March 2020, at 05:00 AM</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">Pending</p>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="mt-10 border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable">
                    <h1 className="text-xl font-bold p-4">Campaign Snapshot</h1>
                    <div className="p-5">
                        {
                            campaigns.map(obj => <CampaignCard key={obj.id}
                                id={obj.id}
                                name={auth.company.name} 
                                category={`Marketplace - ${obj.service}`}
                                leads="12"
                                cpl={obj.price} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard