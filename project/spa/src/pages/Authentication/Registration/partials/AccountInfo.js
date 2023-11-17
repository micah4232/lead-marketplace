import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Faq from './components/accordion';
import { useEffect, useState } from 'react';
import { SaveCard } from '../api';
import CardInformation from './components/cardInformation';


const stripePromise = loadStripe('pk_test_51LkibiL2np5xQYI5huhZzd47cDwtjKo9hMsbN50toCpZtYmx1oadMmJHH0IEVuxvxYc7rpnU5zZQSU6TjNXvD5bY0090F0kFUw');

function AccountInfo() {
    const [options,setOptions] = useState(null);

    useEffect(() => {
        SaveCard('c44e71fa4c97f14d612904e7770c4b42aede57d5').then(response => {
            setOptions({clientSecret: response.data})
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Faq/>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-10">Set Up Card</h1>
                {
                    stripePromise && options && (
                        <Elements options={options} stripe={stripePromise}>
                            <CardInformation clientSecret={options.clientSecret} />
                        </Elements>
                    )
                }
            </div>
        </div>
    )
}

export default AccountInfo