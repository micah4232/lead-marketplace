import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Faq from './components/accordion';


const stripePromise = loadStripe('pk_test_51LkibiL2np5xQYI5huhZzd47cDwtjKo9hMsbN50toCpZtYmx1oadMmJHH0IEVuxvxYc7rpnU5zZQSU6TjNXvD5bY0090F0kFUw');

function AccountInfo() {
    const options = {
        clientSecret: 'sk_test_51LkibiL2np5xQYI5vvCAHfkKHQWMfsYL6nEd7xOoCDWg6dqMLNspIp6R9ksu0hX3YzOo1E3wKlfEvkDCofktWFfc00Q5NBPxNX'
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Faq/>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-10">Set Up Card</h1>
                <Elements stripe={stripePromise}>
                    <CardElement></CardElement>
                </Elements>
            </div>
        </div>
    )
}

export default AccountInfo