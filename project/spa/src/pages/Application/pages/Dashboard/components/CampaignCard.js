import { AiFillNotification } from "react-icons/ai"

function CampaignCard({name, category, leads, cpl}) {
    return (
        <div className="grid grid-cols-2 gap-4 p-3 border">
            <div className="flex justify-center items-center bg-gray-200">
                <span className="text-5xl text-orange-400">
                    <AiFillNotification />
                </span>
            </div>
            <div>
                <p className="text-gray-500">{name}</p>
                <p className="text-gray-500">{ category }</p>
                <p className="mt-5"><span className="text-3xl font-bold">{leads} Leads</span> last 30 Days</p>
                <p className="mt-1"><span className="text-3xl font-bold">${cpl}</span> Cost per Lead</p>
                <p className="mt-5 mb-2">Campaign in Paused Indefinitely</p>
                <a href="#" className="text-blue-500">Enable Campain</a>
            </div>
        </div>
    )
}

export default CampaignCard