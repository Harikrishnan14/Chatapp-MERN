import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", cpassword: "" })
    const [cpassword, setCPassword] = useState(true)

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            if (data.password === data.cpassword) {
                dispatch(signUp(data))
            } else {
                setCPassword(false)
            }
        } else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setCPassword(true)
        setData({ firstname: "", lastname: "", username: "", password: "", cpassword: "" })
    }

    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt='' />
                <div className="web-name">
                    <h1>MERNmate</h1>
                    <h6>Where Connectivity Meets Community.</h6>
                </div>
            </div>
            <div className="a-right">
                <form className="info-form auth-form" onSubmit={handleSubmit} style={{ width: "450px" }}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
                    {isSignUp &&
                        <div>
                            <input type="text" name="firstname" placeholder='First Name' className='info-input' onChange={handleChange} value={data.firstname} />
                            <input type="text" name="lastname" placeholder='Last Name' className='info-input' onChange={handleChange} value={data.lastname} />
                        </div>
                    }
                    <div>
                        <input type="text" name="username" placeholder='Username' className='info-input' onChange={handleChange} value={data.username} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder='Password' className='info-input' onChange={handleChange} value={data.password} />
                        {isSignUp && <input type="password" name="cpassword" placeholder='Confirm Password' className='info-input' onChange={handleChange} value={data.cpassword} />}
                    </div>
                    <span style={{ display: cpassword ? "none" : "block", fontSize: "12px", color: "red", alignSelf: "center", }}>
                        *Password and Confirm Password is not same!
                    </span>
                    <button className='button info-button' type='submit' disabled={loading}>
                        {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
                    </button>
                    <div>
                        <span style={{ fontSize: "14px", cursor: "pointer" }} onClick={() => {
                            setIsSignUp((prev) => !prev);
                            resetForm();
                        }}>
                            {isSignUp ? "Already a user? Login" : "Don't have an account? Sign up"}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth
