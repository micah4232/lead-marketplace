import LeadsDataTable from "../../../../components/LeadsDataTable"
import CampaignCard from "./components/CampaignCard"
import StatementCard from "./components/StatementCard"
import TotalCard from "./components/TotalCard"


function Dashboard() {
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
    return (
        <>
            {/* Total Stats Here */}
            <div className="grid grid-cols-6 gap-4">
                <div>
                    <TotalCard total="2" type="Lead Marked for Follow up" />
                </div>
                <div>
                    <TotalCard total="2.5k" type="Billable Leads All Time" />
                </div>
                <div>
                    <TotalCard total="404" type="Billable Leads last 90 Days" />
                </div>
            </div>
            {/* List of Leads Here */}
            <div className="mt-10 border">
                <h1 className="text-xl font-bold text-white bg-blue-500 p-4">Leads Manager</h1>
                <div className="mx-5 mt-5">
                    <LeadsDataTable headers={headers} data={data}/>
                    <div className="flex justify-between mb-5">
                        <p className="mt-5"><strong>Want more Leads?</strong> Increase the Cost Per Lead in your Campaign Manager</p>
                        <button className="p-4 bg-blue-500 text-white font-bold">View All Leads</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Current Balance Here */}
                <div className="mt-10 border">
                    <h1 className="text-xl font-bold text-white bg-blue-500 p-4">Current Balance</h1>
                    <div className="m-5">
                        <p className="mb-5 text-xl font-bold">Current Billing Cycle</p>
                        <div>
                            <p className="text-5xl font-bold">$510</p>
                            <p className="font-bold">Current Balance</p>
                        </div>
                        <div className="flex justify-between mt-5">
                            <div>
                                <p className="text-gray-300 text-3xl">$0</p>
                                <p className="font-bold">Lead Cost</p>
                            </div>
                            <div>
                                <p className="text-gray-300 text-3xl">$0</p>
                                <p className="font-bold">Lead Credit</p>
                            </div>
                            <div>
                                <p className="text-gray-300 text-3xl">$510</p>
                                <p className="font-bold">Unpaid Statement</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="font-bold text-xl">Billing Threshold</p>
                            <p className="text-3xl"><span className="font-bold">$510</span> / $500</p>
                            <p className="text-xs mt-5">Your credit card ending <strong>1234</strong> is billed each time your Current Balance Threshold of <strong>$500</strong> or at the end of each month if you have not reached your Threshold.</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-xl font-bold">Recent Statements</p>
                            <StatementCard number="1234" date="07/18/2023" card="Card..1234" price="$10.00" paid={false} />
                        </div>
                    </div>
                </div>
                <div className="mt-10 border">
                    <h1 className="text-xl font-bold text-white bg-blue-500 p-4">Campaign Manager</h1>
                    <div className="p-3">
                        <p className="text-xl font-bold text-yellow-400">Paused Campaigns</p>
                        <CampaignCard 
                        name="Home Appliance Repair" 
                        category="Market Place - Electrician - LA" 
                        leads="12"
                        cpl="55" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard