import LeadsDataTable from "../../../../components/LeadsDataTable"

function Leads() {
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
        <div className="border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable">
            <h1 className="text-xl font-bold p-4">Leads Manager</h1>
            <div className="mx-5 my-5">
                <LeadsDataTable headers={headers} data={data}/>
            </div>
        </div>
    )
}

export default Leads