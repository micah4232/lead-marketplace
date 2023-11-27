import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react"
import Card from "./components/campaignCard"
import { createCampaigns, getCampaignList, getListZipCodeGroupCompany } from "./api"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { storeCampaigns, storeZipCodeGroup } from "./reducers/campaignSlice"
import { Button, Label, Modal, Select, TextInput, Textarea } from "flowbite-react";
import { GetMainCategories, GetServiceBySub, GetSubCategoriesByMainId, GetZipCode } from "../../../Authentication/Registration/api";
import { storeMainCategories, storeSelectedMain, storeSubCategories } from "../../../Authentication/reducers/categoriesReducer";
import { onAlertShow } from "../../../../components/reducers/componentSlice";
import ZipCard from "../../../Authentication/Registration/partials/components/zipCard";

function Campaigns() {
    const token = useSelector((state) => state.authentication.token)
    const company = useSelector((state) => state.authentication.company)
    const campaigns = useSelector((state) => state.campaign.campaigns)
    const zipCodeGroup = useSelector((state) => state.campaign.zipCodeGroup)
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
    const [zipCodes, setZipCodes] = useState([])
    const [zip, setZip] = useState(null)
    const [groupCode, setGroupCode] = useState("")
    const [distance, setDistance] = useState(null)

    useEffect(() => {
        if (campaigns.length === 0) {
            getCampaignList(token, company.id).then(response => {
                dispatch(storeCampaigns(response.data))
            }).catch(error => {
                console.log(error)
            })
        }

        if (zipCodeGroup) {
            getListZipCodeGroupCompany(token, company.id).then(response => {
                dispatch(storeZipCodeGroup(response.data))
            })
        }

        if (mainCategories.length === 0) {
            GetMainCategories().then(response => {
                dispatch(storeMainCategories(response.data))
            }).catch(error => {
                console.log(error)
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

    const onFindZipCode = () => {
        if (zip && distance) {
            GetZipCode(zip, distance).then(response => {
                setZipCodes(response.data.results)
            }).catch(error => {
                console.log('error on zipcode')
            })
        } else {
            dispatch(onAlertShow({
                show: true,
                alert: 'error',
                message: 'Zip code and Distance is required if you want to find zip code'
            }))
        }
        
    }

    const onAddZipeCode = () => {
        setZipCodes([
            ...zipCodes,
            {
                code : zip,
                city: '',
                state: ''
            }
        ])
        setZip(null)
    }

    const onChangeZipCodeGroup = (event) => {
        const newZipCodeGroup = zipCodeGroup
        console.log(event.target.value)
        setData({
            ...data,
            zip_group : (event.target.value === 'default') ? null : event.target.value
        });
        if (event.target.value !== 'default') {
            setZipCodes(newZipCodeGroup.filter(obj => obj.id === parseInt(event.target.value))[0].zip_codes)
        } else {
            setZipCodes([])
        }
    }

    const onSaveCampaign = () => {
        createCampaigns(token, data).then(response => {
            console.log(response.data)
            setData({
                "price": "0.00",
                "description": "",
                "company": null,
                "zip_group": null,
                "service": null
            })
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
            <Modal show={modal} size="7xl" onClose={() => setModal(false)}>
                <Modal.Header>
                    { modalTitle }
                </Modal.Header>
                <Modal.Body>
                    <form className="flex w-full flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
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
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Cost Per Lead" />
                                </div>
                                <TextInput type="number" onChange={(event) => setData({...data, price : event.target.value})}/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Description" />
                                </div>
                                <Textarea placeholder="Short Description of your Campaign..." rows={10} onChange={(event)=> setData({...data, description: event.target.value})} />
                            </div>
                            
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Zip Code Group" className="font-bold" />
                            </div>
                            <Select onChange={onChangeZipCodeGroup}>
                                <option value="default">Zip Code Group</option>
                                {
                                    zipCodeGroup.map(obj => <option value={obj.id} key={obj.id}>{obj.name}</option>)
                                }
                            </Select>
                            <div className={data.zip_group === null ? 'basis-1/4 flex justify-center items-end visible' : 'basis-1/4 flex justify-center items-end invisible'}>
                                <div className="mb-2 block">
                                    <Label value="Zip Code Group Name" />
                                </div>
                                <TextInput type="text" value={groupCode} onChange={(event) => setGroupCode(event.target.value)} />
                            </div>
                            <div className="flex flex-row gap-4 justify-center align content-center">
                                <div className="basis-1/4">
                                    <div className="mb-2 block">
                                        <Label value="Zip Code" className="font-bold" />
                                    </div>
                                    <TextInput type="number" value={zip} required shadow onChange={(event) => {
                                        setZip(event.target.value);
                                    }} />
                                </div>
                                <div className="basis-1/4">
                                    <div className="mb-2 block">
                                        <Label value="Miles" className="font-bold" />
                                    </div>
                                    <TextInput type="number" value={distance} required shadow onChange={(event) => {
                                        setDistance(event.target.value)
                                    }} />
                                </div>
                                <div className="basis-1/4 flex justify-center items-end">
                                    <Button onClick={onAddZipeCode}>Add Zip Code</Button>
                                </div>
                                <div className={data.zip_group === null ? 'basis-1/4 flex justify-center items-end visible' : 'basis-1/4 flex justify-center items-end invisible'}>
                                    <Button onClick={onFindZipCode}>Find Zip Code</Button>
                                </div>
                                {/* all zipcodes here please */}
                                
                            </div>
                            <div className="grid grid-cols-6 gap-2 mt-5">
                                {
                                    zipCodes.map((obj, index) => <ZipCard key={index} zipcode={obj.code} index={index} onRemove={() => {const newZipCodes = zipCodes.filter((_,i) => i !== index);setZipCodes(newZipCodes)}} />)
                                }
                            </div>
                        </div>
                    </div>
                    
                    
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full justify-end">
                        <Button onClick={onSaveCampaign}>Save</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Campaigns