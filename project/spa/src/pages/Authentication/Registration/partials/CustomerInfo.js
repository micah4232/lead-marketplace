import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useState } from 'react';

function CustomerInfo() {
    const [position, setPosition] = useState(null);

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
    

    return (
        <>
            <h1 className="text-center font-bold text-xl">Your Customers</h1>
            <p className="text-center">Thanks for confirming your email. Now let's find you the right customers.</p>
            <label for="countries" className="block mb-2 mt-5 text-xl font-bold text-gray-900 dark:text-white">Your Services</label>
            <p>Select Main Category</p>
            <select id="countries" defaultValue={'default'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
            <label for="countries" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Select you desired Service Categories</label>
            <select id="countries" defaultValue={'default'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
            <div className="mt-5">
                <p className="font-bold text-xl">Your Service Area</p>
                <p>Define your Service Area with Starting Zip Code and Radius.</p>
                <p>If needed, refine your Service Area-add or remove Zip Code Areas from the map by clicking on them.</p>
            </div>
            <div className='mt-10'>
                <MapContainer className="w-full h-96" 
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