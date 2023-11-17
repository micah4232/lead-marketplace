import { Spinner } from "flowbite-react";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { ActivateAccount } from "./api";
import { useDispatch } from "react-redux";
import { storeIsVerified } from "../reducers/authenticationSlice";

function VerifyEmail () {
    const { uuid, token } = useParams();
    
    const isVerified = useSelector((state) => state.authentication.isVerified)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isVerified) {
            // dispatch(storeIsVerified(false))
            ActivateAccount(uuid, token).then(response => {
                dispatch(storeIsVerified(true))
            }).catch(error => {
                console.log('error brad!')
            });
        } else {
            dispatch(storeIsVerified(false))
        }
    }, []);
    return (
        <div className="h-screen w-full flex justify-center items-center">
            {
                (!isVerified) ? <><Spinner size="xl" /><p className="ml-5">Verifying...</p></> : <><Button onClick={() => navigate('/registration')}>Back to Registration</Button></>
            }
        </div>
    )
}

export default VerifyEmail