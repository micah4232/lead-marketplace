import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { onAlertShow } from "../../../../../components/reducers/componentSlice";
import { storeSetupCard } from "../../../reducers/authenticationSlice";


function CardInformation(props) {
    const stripe = useStripe()
    const elements = useElements()
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
        dispatch(storeSetupCard(true))
        const result = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: `${window.location}`,
            },
        })

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            dispatch(storeSetupCard(false))
            dispatch(onAlertShow({
                show: true,
                alert: 'error',
                message: result.error.message
            }))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} ref={props.toSubmit}>
                <PaymentElement />
                <Button type="submit">Setup</Button>
            </form>
        </>
    )
}

export default CardInformation