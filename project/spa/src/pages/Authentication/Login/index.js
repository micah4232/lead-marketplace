import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { LoginAPI } from "./api"
import { useDispatch } from "react-redux"
import { resetAuth, storeLoggedIn, storeReset, storeToken } from "../reducers/authenticationSlice"
import { onAlertShow } from "../../../components/reducers/componentSlice"
import { resetCategories } from "../reducers/categoriesReducer"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const isVerified = useSelector((state) => state.authentication.isVerified)
    const isRegistering = useSelector((state) => state.authentication.isRegistering)
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn)
    const status = useSelector((state) => state.authentication.status)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/app");
        }
        if (isRegistering) {
            navigate("/registration")
        }
        if (status) {
            dispatch(resetAuth())
            dispatch(resetCategories())
            dispatch(storeReset(null))
        }
    }, []);

    return (
        <div className="mt-20" style={{width: 500}}>
            <div className="flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 bg-[#D4DAF9] p-10">
                <h1 className="text-xl font-bold">Login</h1>
            </div>
            <div className="bg-white p-5 border-1">
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label value="Username" />
                        </div>
                        <TextInput
                        id="email1"
                        placeholder="username"
                        required
                        type="email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            value="Password"
                        />
                        </div>
                        <TextInput
                        id="password1"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="button" onClick={() => {
                        LoginAPI(email, password).then(response => {
                            dispatch(storeToken(response.data.auth_token))
                            dispatch(storeLoggedIn(true))
                        }).catch(error => {
                            dispatch(onAlertShow({
                                show : true,
                                alert : 'error',
                                message : 'Credentials are incorrect, please try again.'
                            }))
                        })
                    }}>
                        Submit
                    </Button>
                    <div className="text-center">
                        <Link to="/registration">Haven't Register Yet?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login