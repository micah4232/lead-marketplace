import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { GetServiceBySub } from '../api';
import { useDispatch } from 'react-redux';
import { storeSelectedServices } from '../../reducers/categoriesReducer';
import { storeCompany } from '../../reducers/authenticationSlice';

function YourSettings() {
    const selectedSub = useSelector((state) => state.category.selectedSub)
    const company = useSelector((state)=>state.authentication.company)
    const selectedServices = useSelector((state) => state.category.selectedServices)
    const [services, setServices] = useState([
        {value: '1', label: 'samok' }
    ]);
    const dispatch = useDispatch()

    useEffect(() => {

        if (selectedSub) {
            GetServiceBySub(selectedSub).then(response => {
                if (response.status === 200) {
                    const temp = response.data;
                    const tempList = []
                    temp.map(obj => tempList.push({value: obj.id, label: obj.name}));
                    setServices(tempList);
                }
            })
        }

    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-xl">Your Settings</h2>
            <h3 className="text-left font-bold text-xl">Cost Prepaid</h3>
            <p>Your cost per lead (CPL) is what you are bidding to acquire a Lead. The more aggressive your CPL, the more likely you are to win new Leads,. We've suggested a starting point below, but you can always adjust your CPL at any time per lead depends on the category </p>
            {
                (selectedSub === null) ? <p className="text-sm text-red-500">Please make sure to select Sub category</p> : null
            }
            <Select options={services} isMulti className='w-full mt-5' value={selectedServices} onChange={(newValue) => {
                dispatch(storeSelectedServices(newValue))
            }} />
            <h3 className="text-left font-bold text-xl mt-10">Lead Delivery</h3>
            <p>The Phone Number where you want to receive your leads.</p>
            <div>
                <input type="text" id="phone_number" value={company.phone_number} onChange={(event) => dispatch(storeCompany({...company, phone_number: event.target.value}))} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
                <p className="text-sm">Note: You can edit this, as well as set notifications for when a lead has been delivered, in your account.</p>
            </div>
            <div class="flex items-center mb-4 mt-5">
                <input id="default-checkbox" type="checkbox" checked={company.enable_calls_to_phone} onChange={(event) => dispatch(storeCompany({...company, enable_calls_to_phone: !company.enable_calls_to_phone}))} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Record Phone Calls & Enable Lead Review</label>
            </div>
            <p><strong>REQUERED for Lead Review</strong>. You must Opt-In to Call Recording in order for you to be able to submit leads for review. which ensures that you will not pay for any non-billable leads.</p>
        </div>
    )
}

export default YourSettings