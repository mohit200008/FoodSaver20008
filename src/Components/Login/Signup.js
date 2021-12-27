import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export const Signup = () => {
    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='signup-header'>
                <Link to="/" className="homepage_1" ><h3>Create Account</h3></Link>
                    <p>please signup to Continue</p>
                </div>
                <div className='signup-form'>
                    <form className='group_1'>
                        <div className="form-group">
                            <input type="email" className="form-control_1" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control_1" id="password" placeholder="Password" />
                            <input type="password" className="form-control_1" id="password" placeholder="Confirm Password" />
                        </div>
                    </form>
                </div>
                <div className='here_1'><Link to='/Login'>Already have an account?</Link></div>
            </div>
        </div>
          
    )
}
