import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react"
import Card from "./components/campaignCard"
import { getCampaignList } from "./api"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { storeCampaigns } from "./reducers/campaignSlice"
import { Label, Modal, Select, TextInput } from "flowbite-react";
import { GetMainCategories, GetServiceBySub, GetSubCategoriesByMainId } from "../../../Authentication/Registration/api";
import { storeMainCategories, storeSelectedMain, storeSubCategories } from "../../../Authentication/reducers/categoriesReducer";

function Campaigns() {
    const token = useSelector((state) => state.authentication.token)
    const company = useSelector((state) => state.authentication.company)
    const campaigns = useSelector((state) => state.campaign.campaigns)
    const mainCategories = useSelector((state) => state.category.mainCategories)
    const subCategories = useSelector((state) => state.category.subCategories)
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('Add Campaign')
    const [onCreate, setOnCreate] = useState(false)
    const [selectedMain, setSelectedMain] = useState()
    const [selectedSub, setSelectedSub] = useState()
    const [services, setServices] = useState([])
    const [disabled, setDisabled] = useState({
        sub: true,
        service: true
    })
    const [data, setData] = useState({
        "price": "0.00",
        "description": "",
        "company": null,
        "zip_group": null,
        "service": null
    })

    useEffect(() => {
        if (campaigns.length === 0) {
            getCampaignList(token, company.id).then(response => {
                dispatch(storeCampaigns(response.data))
            }).catch(error => {
    
            })
        }
        if (mainCategories.length === 0) {
            GetMainCategories().then(response => {
                dispatch(storeMainCategories(response.data))
            })
        }
    }, [token, getCampaignList, company, storeCampaigns])

    const onClickAddCampaign = () => {
        setModal(!modal)
        setOnCreate(true)
        setModalTitle('Create Campaign')
    }
    
    const onChangeMainCategory = (event) => {
        const value = event.target.value
        setSelectedMain(value)
        setDisabled({
            ...disabled,
            sub : false
        })
        GetSubCategoriesByMainId(value).then(response => {
            dispatch(storeSubCategories(response.data))
        })
    }

    const onChangeSubCategory = (event) => {
        const value = event.target.value
        setDisabled({
            ...disabled,
            service : false
        })
        setSelectedSub(value)
        GetServiceBySub(value).then(response => {
            setServices(response.data)
        })
    }

    const onChangeServices = (event) => {
        const value = event.target.value
        
        setData({
            ...data,
            service: value
        })
    }

    return (
        <>
            <h1 className="font-extrabold text-3xl mb-5">Campaign Manager</h1>
            <div className="border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable p-5">
                <div className="grid grid-cols-4 gap-4">
                    {
                        campaigns.length !== 0 ? campaigns.map((obj) => <Card service={obj.service} company={company.name} key={obj.id} />) : ''
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
            <Modal show={modal} onClose={() => setModal(false)}>
                <Modal.Header>
                    { modalTitle }
                </Modal.Header>
                <Modal.Body>
                    <form className="flex w-full flex-col gap-4">
                        {
                            onCreate ? <>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label value="Select Main Category" />
                                        </div>
                                        <Select onChange={onChangeMainCategory}>
                                            <option value="default">Choose your Main Category</option>
                                            {
                                                mainCategories.map(obj => <option value={obj.id} key={obj.id}>{obj.name}</option>)
                                            }
                                        </Select>
                                    </div>
                                    <div>
                                    <div className="mb-2 block">
                                        <Label value="Select Sub Category" />
                                        </div>
                                        <Select onChange={onChangeSubCategory} disabled={disabled.sub}>
                                            <option value="default">Select Sub Categories</option>
                                            {
                                                subCategories.map(obj => <option value={obj.id} key={obj.id}>{obj.name}</option>)
                                            }
                                        </Select>
                                    </div>
                                    <div>
                                    <div className="mb-2 block">
                                        <Label value="Services" />
                                        </div>
                                        <Select onChange={onChangeServices} disabled={disabled.service}>
                                            {
                                                services.map(obj => <option value={obj.id} key={obj.id}>{obj.name}</option>)
                                            }
                                        </Select>
                                    </div>
                            </> : ''
                        }
                        
                        <div>
                            <div className="mb-2 block">
                                <Label value="Zip Code" />
                            </div>
                            <TextInput type="text" required shadow />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Campaigns