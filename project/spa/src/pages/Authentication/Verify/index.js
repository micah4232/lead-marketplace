import { useParams } from "react-router-dom"

function VerifyEmail () {
    const { uuid, token } = useParams();
    
    return (
        <div>Verify Email now {uuid} {token}</div>
    )
}

export default VerifyEmail