import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onAlertShow } from "../../../../../components/reducers/componentSlice";

function CardInformation(props) {
    const stripe = useStripe()
    const elements = useElements()
    const [disableButton, setDisableButton] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if (submitError) {
            // Show error to your customer
            // setErrorMessage(submitError.message);
            console.log(submitError.message)
            return;
        }

        const result = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: `${window.location}`,
            },
        })

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
            dispatch(onAlertShow({
                show: true,
                alert: 'error',
                message: result.error.message
            }))
        } else {
            setDisableButton(true)
            dispatch(onAlertShow({
                show: true,
                alert: 'success',
                message: 'Card Setup Success!'
            }))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <PaymentElement />
                <Button disable={disableButton} type="submit">Setup</Button>
            </form>
        </>
    )
}

export default CardInformation