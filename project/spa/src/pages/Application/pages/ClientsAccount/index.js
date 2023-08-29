function ClientsAccount() {
    return (
        <>
            <div class="flex flex-wrap -mx-3 mb-5 removable">
                <div class="w-full max-w-full px-3 mb-6 sm:w-full sm:flex-none xl:mb-0 drop-zone rounded-xl"><h3 class="draggable font-white font-semibold text-3xl">Client Accounts</h3></div>
            </div>
            <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 border-black-125 drop-shadow-md dark:shadow-soft-dark-xl rounded-2xl bg-clip-border draggable" draggable="true">
                <div class="p-4 pb-0 mb-0 rounded-t-4">
                    <div class="flex justify-between">
                        <h6 class="mb-2 dark:text-white">Showing 4 Companies with 52 Campaigns</h6>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="items-center w-full mb-4 align-top border-gray-200 dark:border-white/40">
                        <tbody>
                            <tr>
                                <th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Company</th>
                                    <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Campaigns</th>
                                    <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Leads (Last 30 Days)</th>
                                    <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Lead Cost (Last 30 Days)</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                                    <div class="flex items-center px-2 py-1">
                                        <div>
                                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/icons/flags/US.png" alt="Country flag" />
                                        </div>
                                        <div class="ml-6">
                                            <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Country:</p>
                                            <h6 class="mb-0 leading-normal text-sm dark:text-white">United States</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Total Campaigns: 26</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">Air Conditioning: 13</h6>
                                        <h6>Heating: 13</h6>
                                        <h6>Enabled: 0 Paused: 26</h6>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Leads</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">203</h6>
                                    </div>
                                </td>
                                <td class="p-2 leading-normal align-middle bg-transparent border-b text-sm whitespace-nowrap dark:border-white/40">
                                    <div class="flex-1 text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">(remove these heads)</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">$29.96</h6>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                                    <div class="flex items-center px-2 py-1">
                                        <div>
                                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/icons/flags/DE.png" alt="Country flag" />
                                        </div>
                                        <div class="ml-6">
                                            <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Country:</p>
                                            <h6 class="mb-0 leading-normal text-sm dark:text-white">Germany</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Sales:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">3.900</h6>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Value:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">$440,000</h6>
                                    </div>
                                </td>
                                <td class="p-2 leading-normal align-middle bg-transparent border-b text-sm whitespace-nowrap dark:border-white/40">
                                    <div class="flex-1 text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Bounce:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">40.22%</h6>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                                    <div class="flex items-center px-2 py-1">
                                        <div>
                                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/icons/flags/GB.png" alt="Country flag" />
                                        </div>
                                        <div class="ml-6">
                                            <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Country:</p>
                                            <h6 class="mb-0 leading-normal text-sm dark:text-white">Great Britain</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Sales:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">1.400</h6>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Value:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">$190,700</h6>
                                    </div>
                                </td>
                                <td class="p-2 leading-normal align-middle bg-transparent border-b text-sm whitespace-nowrap dark:border-white/40">
                                    <div class="flex-1 text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Bounce:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">23.44%</h6>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                                    <div class="flex items-center px-2 py-1">
                                        <div>
                                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/icons/flags/BR.png" alt="Country flag" />
                                        </div>
                                        <div class="ml-6">
                                            <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Country:</p>
                                            <h6 class="mb-0 leading-normal text-sm dark:text-white">Brasil</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Sales:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">562</h6>
                                    </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                                    <div class="text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Value:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">$143,960</h6>
                                    </div>
                                </td>
                                <td class="p-2 leading-normal align-middle bg-transparent border-0 text-sm whitespace-nowrap">
                                    <div class="flex-1 text-center">
                                        <p class="mb-0 font-semibold leading-tight text-xs dark:opacity-60">Bounce:</p>
                                        <h6 class="mb-0 leading-normal text-sm dark:text-white">32.14%</h6>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClientsAccount