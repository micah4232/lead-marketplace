import { TextInput, Label, Select } from "flowbite-react"

function ServiceCard ({service, zipList}) {
    return (
        <div className="bg-gray-200 border border-black">
            <div className="bg-white p-1">
                <h4 className="text-md font-bold text-center mb-3">{ service }</h4>
            </div>
            <div className="p-3">
                <Label>Price</Label>
                <TextInput addon="$" placeholder='10.00'  />
                <div className="mt-3">
                    <Label>Zipcode Group</Label>
                    <Select >
                        {
                            zipList && zipList.map((obj, index) => <option key={index}>{obj.name}</option>)
                        }
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard