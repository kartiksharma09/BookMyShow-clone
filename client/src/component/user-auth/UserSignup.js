import React from 'react'
import { Fragment } from 'react'
import "../../css/userAuth.css"


const UserSignup = () => {
    return (
        <div className="container">

            <form id="signup">

                <div className="header">

                    <h3>Sign Up</h3>

                    <p>You want to fill out this form</p>
                    
                </div>

                <div className="sep"></div>

                <div className="inputs">
                    <input className="form-inputs" type="text" placeholder="username" autofocus />
                    <input className="form-inputs" type="email" placeholder="e-mail" autofocus />

                    <input className="form-inputs" type="password" placeholder="Password" />
                    <input className="form-inputs" type="password" placeholder="Confirm Password" />

                    <a id="submit" href="#">REGISTER</a>

                </div>

            </form>

        </div>
    )
}

export default UserSignup
