import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"

function CardInformation(props) {
    const stripe = useStripe()
    const elements = useElements()

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
    }

    return (
        <>
            <form >
                <PaymentElement />
            </form>
        </>
    )
}

export default CardInformation