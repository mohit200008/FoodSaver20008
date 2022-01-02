
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React from 'react'

function Login() {
    return (
       
            
        <div className="signin">
        
        <div className="signin-container">
            <div className="signin-header">
               <h3 className='acc'>Welcome Back</h3>

                <p>Please Sign In to Continue</p>

            </div>
            <div className="signin-form">
                <form className='group_0'>
                    <div className="form-group_0">
                        <input type="email/phone" className="control_0" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group_0">
                        <input type="password" className="control_0" id="password" placeholder="Password" />
                    </div>
                    <button className='otp-btn_1'>Signin</button>
                </form>
            </div>
            <div className='here'><Link to='/Otp'>Login with Otp</Link></div>
            <div className='here'><Link to='/Signup'>New User Signup Here</Link></div>
           
        </div>
       <div className='comp'> <img  className='pic' src={back} alt='' /></div>
    </div >
    
 
    )
}

export default Login


