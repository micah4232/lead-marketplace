import { TextInput, Label, Select } from "flowbite-react"
import { useDispatch } from "react-redux"
import { onChangePrice, onChangeZipGroup } from "../../../reducers/categoriesReducer"

function ServiceCard ({service, zipList, index}) {
    const dispatch = useDispatch()
    return (
        <div className="bg-gray-200 border border-black">
            <div className="bg-white p-1">
                <h4 className="text-md font-bold text-center mb-3">{ service.label }</h4>
            </div>
            <div className="p-3">
                <Label>Price</Label>
                <TextInput addon="$" type="number" value={service.price} placeholder='10.00' onChange={(event) => {
                    dispatch(onChangePrice({index: index, value: event.target.value}))
                }} />
                <div className="mt-3">
                    <Label>Zipcode Group</Label>
                    <Select value={service.zipcode_group} onChange={(event) => {
                        dispatch(onChangeZipGroup({index: index, value: event.target.value}))
                    }}>
                        {
                            zipList && zipList.map((obj, index) => <option key={index} value={obj.id} >{obj.name}</option>)
                        }
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard