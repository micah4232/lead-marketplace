import { useSelector } from "react-redux"

export default function CompanySettings() {
    const company = useSelector((state) => state.authentication.company)
    return (
        <>
            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6>Company Settings</h6>
            </div>
            <div className="flex-auto p-4">
                <div className="font-bold leading-tight uppercase text-xs text-slate-500">
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                            <b>Name: </b> {company.name}
                        </li>
                        <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                            <b>Website: </b> {company.website}
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}