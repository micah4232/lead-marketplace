import { AiFillNotification } from "react-icons/ai"

function CampaignCard({name, category, leads, cpl}) {
    return (
        <div className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 drop-shadow-md">
            <div className="flex flex-col">
                <h6 class="mb-4 leading-normal text-sm">Campaign - Name - 001</h6>
                <span class="mb-2 leading-tight text-xs">Company Name: <span class="font-semibold text-slate-700 sm:ml-2">Viking Burrito</span>
                </span>
                <span class="mb-2 leading-tight text-xs" data-gramm="false" wt-ignore-input="true" data-quillbot-element="J8e_W5bGddWpaAbjSfTSA">Leads Last 7 Days: <span class="font-semibold text-slate-700 sm:ml-2">5 Leads</span>
                </span>
                <span class="leading-tight text-xs" data-gramm="false" wt-ignore-input="true" data-quillbot-element="UkmbPpTIzu4EqKmwFpoRL">Cost Per Lead: <span class="font-semibold text-slate-700 sm:ml-2">$23.00</span>
                </span>
            </div>
            <div className="ml-auto text-right">
                <a class="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-red hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;">
                    <i class="mr-2 far fa-trash-alt bg-150 bg-gradient-red bg-x-25 bg-clip-text" aria-hidden="true"></i>Delete </a>
                <a class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;" data-gramm="false" wt-ignore-input="true" data-quillbot-element="iwJ2J8FhUqP5TNjT7UCPE">
                    <i class="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Enable</a>
            </div>
        </div>
    )
}

export default CampaignCard