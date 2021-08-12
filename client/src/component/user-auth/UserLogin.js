import React from 'react'

import "../../css/userAuth.css"

const UserLogin = () => {
    return (
        <div className="container">

            <form id="signup">

                <div className="header">

                    <h3>Sign In</h3>

                    <p>You want to fill out this form</p>

                </div>

                <div className="sep"></div>

                <div className="inputs">
                    <input className="form-inputs" type="email" placeholder="e-mail" autofocus />
                    
                    <input className="form-inputs" type="password" placeholder="Password" />

                    <a id="submit" href="#">SIGN IN</a>

                </div>

            </form>

        </div>
    )
}

export default UserLogin
