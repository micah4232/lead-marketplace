import CompanySettings from "./partials/companySettings";
import NameHeader from "./partials/nameHeader";
import Settings from "./partials/settings";

export default function Profile() {

    return (
        <div className="w-full px-6 py-6 mx-auto drop-zone text-slate-500">
            <NameHeader />
            <div className="w-full p-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 flex flex-row gap-6">
                        <div className="relative basis-1/3 h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <Settings />
                        </div>
                        <div className="relative basis-1/3 h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <CompanySettings />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}