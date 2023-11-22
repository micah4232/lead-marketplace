import { FaPlus } from "react-icons/fa";
import { useEffect } from "react"
import Card from "./components/campaignCard"
import { getCampaignList } from "./api"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { storeCampaigns } from "./reducers/campaignSlice"

function Campaigns() {
    const token = useSelector((state) => state.authentication.token)
    const company = useSelector((state) => state.authentication.company)
    const campaigns = useSelector((state) => state.campaign.campaigns)
    const dispatch = useDispatch()

    useEffect(() => {
        if (campaigns.length === 0) {
            getCampaignList(token, company.id).then(response => {
                dispatch(storeCampaigns(response.data))
            }).catch(error => {
    
            })
        }
    }, [token, getCampaignList, company, storeCampaigns])

    const onClickAddCampaign = () => {
        
    }

    return (
        <>
            <h1 className="font-extrabold text-3xl mb-5">Campaign Manager</h1>
            <div className="border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable p-5">
                <div className="grid grid-cols-4 gap-4">
                    {
                        campaigns.length !== 0 ? campaigns.map((obj) => <Card service={obj.service} company={company.name} key={obj.service} />) : ''
                    }
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border-2 border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                        <div className="flex flex-col justify-center flex-auto p-6 text-center">
                        <button className="text-slate-400 hover:text-slate-500" onClick={onClickAddCampaign}>
                            <div className="flex justify-center text-4xl "><FaPlus /></div>
                            <h5 className="text-lg mb-0">New Campaign</h5>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaigns