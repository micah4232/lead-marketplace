import { Toast } from "flowbite-react"
import { MdError, MdCheckCircle, MdInfo } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { onAlertClose } from "./reducers/componentSlice"
import { useEffect } from "react"

function AlertToaster () {

    const alert = useSelector((state) => state.component.alert)
    const dispatch = useDispatch()

    useEffect(() => {
        if (alert.show === true) {
            setTimeout(() => dispatch(onAlertClose()), 3000);
        }
    }, []);
    
    const alertChange = () => {
        let alertColor = 'cyan'
        // for error color
        if (alert.alert === 'error') {
            alertColor = 'red'
        }
        // for success alert color
        if (alert.alert === 'success') {
            alertColor = 'green'
        }
        // information color here
        if (alert.alert === 'info') {
            alertColor = 'yellow'
        }

        return `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-${alertColor}-100 text-${alertColor}-500 dark:bg-${alertColor}-800 dark:text-${alertColor}-200`
    }

    const textColor = () => {
        let color = 'cyan'
        if (alert.alert === 'error') {
            color = 'red'
        }
        if (alert.alert === 'success') {
            color = 'green'
        }
        if (alert.alert === 'info') {
            color = 'yellow'
        }
        return `text-${color}-500 font-bold`
    }

    const imageShow = () => {
        let icon = ''
        if (alert.alert === 'error') {
            icon = <MdError className="h-6 w-6" />
        }
        if (alert.alert === 'success') {
            icon = <MdCheckCircle className="h-6 w-6" />
        }

        if (alert.alert === 'info') {
            icon = <MdInfo className="h-6 w-6" />
        }
        return icon
    }
 
    return (
        <>
            {
                (alert.show === true) ? <>
                    <Toast className='fixed top-10 justify-self-end right-3 shadow-lg shadow-indigo-500/40'>
                        <div className={alertChange()}>              
                        {
                            imageShow()
                        }
                        </div>
                        <div className="ml-3 text-sm font-normal">
                        <p className={textColor()}>{ alert.message }</p>
                        </div>
                        <Toast.Toggle onClick={() => dispatch(onAlertClose())} />
                    </Toast>
                </> : null
            }
        </>
    )
}

export default AlertToaster