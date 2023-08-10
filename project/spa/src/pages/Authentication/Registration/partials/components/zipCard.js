import { AiOutlineClose } from 'react-icons/ai'

function ZipCard({zipcode, onRemove, index}) {
    return (
        <span className="bg-gray-300 p-3 flex">
            {zipcode} <span className="flex content-center justify-center items-center ml-1" onClick={onRemove}><AiOutlineClose/></span>
        </span>
    )
}

export default ZipCard