import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetMainCategories, GetSubCategoriesByMainId, GetZipCode } from '../api';
import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import ZipCard from './components/zipCard';


function CustomerInfo() {
    const [position, setPosition] = useState(null);
    const [main, setMain] = useState([])
    const [sub, setSub] = useState([])
    const [selectedMain, setSelectedMain] = useState('default')
    const [openModal, setModal] = useState(false)
    const [zipCodes, setZipCodes] = useState([])
    const [spinZip, setSpinZip] = useState(false)
    const [zip, setZip] = useState()
    const [distance, setDistance] = useState()
    const [zipModel, setZipModel] = useState({code: '', city: '', state: ''})

    useEffect(() => {
        GetMainCategories().then(response => {
            setMain(response.data)
        }).catch(error => {
            console.log('error on getting main categories')
        })
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

    

    const onAddZipCode = () => {
        if (zipModel.code != '') {
            const tempZipCodes = zipCodes;
            tempZipCodes.push(zipModel)
            setZipCodes(tempZipCodes)
            setZipModel({code: '', city: '', state: ''})
        }
    }
    

    return (
        <>
            <h1 className="text-center font-bold text-xl">Your Customers</h1>
            <p className="text-center">Thanks for confirming your email. Now let's find you the right customers.</p>
            <label for="main" className="block mb-2 mt-5 text-xl font-bold text-gray-900 dark:text-white">Your Services</label>
            <p>Select Main Category</p>
            <select id="main" defaultValue={'default'} onChange={(event) => {
                console.log(event.target.value);
                setSelectedMain(event.target.value);
                    GetSubCategoriesByMainId(event.target.value).then(response => {
                        setSub(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
                }
            } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Choose your Main Category</option>
            {
                main.map(obj => <option key={obj.id} value={obj.id}>{ obj.name }</option>)
            }
            </select>
            <label for="countries" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Select you desired Service Categories</label>
            <select id="countries" defaultValue={'default'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Select Sub Categories</option>
            {
                sub.map(obj => <option key={obj.id} value={obj.id}>{obj.name}</option>)
            }
            </select>
            <div className="mt-5">
                <p className="font-bold text-xl">Your Service Area</p>
                <p>Define your Service Area with Starting Zip Code and Radius.</p>
                <p>If needed, refine your Service Area-add or remove Zip Code Areas from the map by clicking on them.</p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-5'>
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
                                        <TextInput type="text" placeholder='Name'/>
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
                                        <Button color="success" onClick={() => setModal(false)}>
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