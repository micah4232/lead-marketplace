import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Faq from './components/accordion';
import { useEffect, useState } from 'react';
import { SaveCard } from '../api';
import CardInformation from './components/cardInformation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAuth, storeIsRegistering, storeLoggedIn } from '../../reducers/authenticationSlice';
import { onAlertShow } from '../../../../components/reducers/componentSlice';
import { resetCategories } from '../../reducers/categoriesReducer';


const stripePromise = loadStripe('pk_test_51LkibiL2np5xQYI5huhZzd47cDwtjKo9hMsbN50toCpZtYmx1oadMmJHH0IEVuxvxYc7rpnU5zZQSU6TjNXvD5bY0090F0kFUw');

function AccountInfo() {
    const [options,setOptions] = useState(null);
    const user = useSelector((state) => state.authentication.user)
    const setup = useSelector((state) => state.authentication.setupCard)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!setup) {
            SaveCard(user.id).then(response => {
                setOptions({clientSecret: response.data})
            });
        } else {
            dispatch(onAlertShow({
                show : true,
                alert : 'success',
                message: 'Save Card detail Successful.'
            }))
            dispatch(storeIsRegistering(false))
            dispatch(storeLoggedIn(false))
            // reset all
            dispatch(resetAuth())
            dispatch(resetCategories())
            navigate('/')
        }
        
    }, [])

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