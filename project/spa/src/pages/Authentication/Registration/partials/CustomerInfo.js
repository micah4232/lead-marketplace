import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeMainCategories, storeSelectedMain, storeSelectedSub, storeSubCategories } from '../../reducers/categoriesReducer';
import { CreateCompanyZipCodeList, GetCompanyIdByUser, GetMainCategories, GetSubCategoriesByMainId, GetZipCode } from '../api';
import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import ZipCard from './components/zipCard';
import { useSelector } from 'react-redux';
import * as _ from 'lodash'
import { storeCompany, storeCompanyZipCode, storeZipCodeList } from '../../reducers/authenticationSlice';


function CustomerInfo() {
    const [position, setPosition] = useState(null);
    const [openModal, setModal] = useState(false)
    const [zipCodes, setZipCodes] = useState([])
    const [spinZip, setSpinZip] = useState(false)
    const [zip, setZip] = useState()
    const [distance, setDistance] = useState()
    const [zipName, setZipName] = useState()
    const [zipModel, setZipModel] = useState({code: '', city: '', state: ''})
    
    const mainCategories = useSelector((state) => state.category.mainCategories)
    const subCategories = useSelector((state) => state.category.subCategories)
    const selectedMain = useSelector((state) => state.category.selectedMain)
    const selectedSub = useSelector((state) => state.category.selectedSub)
    const company = useSelector((state) => state.authentication.company)
    const user = useSelector((state) => state.authentication.user)
    const zipCodeList = useSelector((state) => state.authentication.zipCodeList)
    const dispatch = useDispatch()

    useEffect(() => {
        if (mainCategories.length == 0) {
            GetMainCategories().then(response => {
                dispatch(storeMainCategories(response.data))
            }).catch(error => {
                console.log('error on getting main categories')
            })
        }
        if (company.id === undefined && user.id !== undefined) {
            GetCompanyIdByUser(user.id).then(response => {
                const tempComp = company;
                dispatch(storeCompany({...tempComp, id: response.data.company}));
            }).catch(error => {
                console.log('error brad!')
            })
        }
    }, []);

    function LocationMarker() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(event) {
                setPosition(event.latlng);
                map.flyTo(event.latlng, map.getZoom());
            }
        });
        return position === null ? null : (
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng})}>
                <Popup>You are Here!</Popup>
            </Marker>
        )
    }

    const onClickFindZip = () => {
        if (zipCodes.length === 0) {
            setSpinZip(true)
            GetZipCode(zip, distance).then(response => {
                if (response.status == 200) {
                    setZipCodes(response.data.results)
                    setSpinZip(false)
                    // set all the data of zip code near him.
                    setModal(true);
                }
            })
        }
        setModal(true);
    }

    const onClickAddZipCode = () => {
        setModal(true);
    }

    const onAddZipCode = () => {
        if (zipModel.code != '') {
            const tempZipCodes = zipCodes;
            setZipCodes([...tempZipCodes, zipModel])
            setZipModel({code: '', city: '', state: ''})
        }
    }

    const onSaveZipCodeGroup = () => {
        const data = {
            name: zipName,
            main_zip : zip,
            radius_miles : distance,
            company: company.id,
            zip_codes: zipCodes
        }
        CreateCompanyZipCodeList(data).then((response) => {
            if (response.status === 201) {
                const temp = zipCodeList
                dispatch(storeZipCodeList({...response.data, zip_codes: zipCodes}))
                // after dispatch clear all
                setZipName('')
                setZip('')
                setDistance('')
                setZipCodes([])
                setModal(false)
            }
        }).catch(error => {
            console.log(error)
        });
        
    }
    
    return (
        <>
            <h1 className="text-center font-bold text-xl">Your Customers</h1>
            <p className="text-center">Thanks for confirming your email. Now let's find you the right customers.</p>
            <label for="main" className="block mb-2 mt-5 text-xl font-bold text-gray-900 dark:text-white">Your Services</label>
            <p>Select Main Category</p>
            <select id="main" value={selectedMain} onChange={(event) => {
                    dispatch(storeSelectedMain(event.target.value));
                    GetSubCategoriesByMainId(event.target.value).then(response => {
                        dispatch(storeSubCategories(response.data))
                    }).catch(error => {
                        console.log(error)
                    })
                }
            } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Choose your Main Category</option>
            {
                mainCategories.map(obj => <option key={obj.id} value={obj.id}>{ obj.name }</option>)
            }
            </select>
            <label for="sub-categories" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Select you desired Service Categories</label>
            <select id="sub-categories" value={selectedSub} onChange={(event) => {
                dispatch(storeSelectedSub(event.target.value));
            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Select Sub Categories</option>
            {
                subCategories.map(obj => <option key={obj.id} value={obj.id}>{obj.name}</option>)
            }
            </select>
            <div className="mt-5">
                <p className="font-bold text-xl">Your Service Area</p>
                <p>Define your Service Area with Starting Zip Code and Radius.</p>
                <p>If needed, refine your Service Area-add or remove Zip Code Areas from the map by clicking on them.</p>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-5'>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label for="zipCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                        <input type="number" id="zipCode" value={zip} onChange={(event)=>setZip(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90001" required />
                    </div>
                    <div>
                        <label for="radiusMile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Radius Mile</label>
                        <input type="number" id="radiusMile" value={distance} onChange={(event) => setDistance(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                    </div>
                    <div className='flex content-end items-end pt-7'>
                        <div>
                            <Button onClick={onClickFindZip}>
                                { spinZip ? <Spinner aria-label='spinner' /> : null }
                                <span>Find Zip</span>
                            </Button>
                            <Modal show={openModal} size="2xl" popup onClose={() => setModal(false)}>
                                <Modal.Header>Add Zip Codes</Modal.Header>
                                <Modal.Body>
                                    <div className="mt-5 mb-5">
                                        <Label htmlFor='name' value='Name'/>
                                        <TextInput type="text" placeholder='Name' value={zipName} onChange={(event) => setZipName(event.target.value)}/>
                                        <p className='text-xs ml-2'>Name your set of zipcodes</p>
                                    </div>
                                    <div className="mt-5 mb-5 grid grid-cols-4 gap-4">
                                        <div className="col-span-3">
                                            <Label htmlFor='zip code' value='Zip Code'/>
                                            <TextInput type="number" placeholder='Zip Code' value={zipModel.code} onChange={(event) => setZipModel({...zipModel, code: event.target.value})}/>
                                        </div>
                                        <div className='flex items-end'>
                                            <Button onClick={onAddZipCode}>Add Zip Code</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4">
                                        {/* set of zipcodes here */}    
                                        {
                                            zipCodes.map((obj, index) => <ZipCard key={index} zipcode={obj.code} index={index} onRemove={() => { const newZipCodes = zipCodes.filter((_, i) => i !== index);setZipCodes(newZipCodes); }}/>)
                                        }
                                    </div>
                                    <div className="text-right mt-5">
                                        {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                                        <div className="flex justify-end gap-4">
                                        <Button color="success" onClick={onSaveZipCodeGroup}>
                                            Save
                                        </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex content-end items-end pt-7'>
                        <Button onClick={onClickAddZipCode}>Add Zip Code</Button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold pt-2 pb-2'>Zip Code Lists</h1>
                <div className='mt-2'>
                    {
                        zipCodeList.map(obj => <span className='p-2 bg-gray-400 mr-2'>{obj.name}</span>)
                    }
                </div>
            </div>
            <div className='mt-10'>
                <MapContainer className="w-full h-96 z-0" 
                center={[33.93424531117312, -118.14424626053462]} 
                zoom={9} 
                scrollWheelZoom={true}
                >   
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
        </>
    )
}

export default CustomerInfo