import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt='' />
                <div className="web-name">
                    <h1>MERNmate</h1>
                    <h6>Where Connectivity Meets Community.</h6>
                </div>
            </div>
            <Login />
        </div>
    )
}

function Login() {
    return (
        <div className="a-right">
            <form className="info-form auth-form" style={{ width: "55vh" }}>
                <h3>Log In</h3>
                <div>
                    <input type="text" name="username" placeholder='Username' className='info-input' />
                </div>
                <div>
                    <input type="password" name="password" placeholder='Password' className='info-input' />
                </div>
                <button className="button info-button">Login</button>
                <div>
                    <span style={{ fontSize: "14px" }}>Don't have an account? Sign up</span>
                </div>
            </form>
        </div>
    );
}

function SignUp() {
    return (
        <div className="a-right">
            <form className="info-form auth-form">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" name="firstname" placeholder='First Name' className='info-input' />
                    <input type="text" name="lastname" placeholder='Last Name' className='info-input' />
                </div>
                <div>
                    <input type="text" name="username" placeholder='Username' className='info-input' />
                </div>
                <div>
                    <input type="password" name="password" placeholder='Password' className='info-input' />
                    <input type="password" name="c-password" placeholder='Confirm Password' className='info-input' />
                </div>
                <button className='button info-button' type='submit'>Sign Up</button>
                <div>
                    <span style={{ fontSize: "14px" }}>Already a user? Login</span>
                </div>
            </form>
        </div>
    )
}

export default Auth
