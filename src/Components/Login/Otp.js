
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React,{useState} from 'react'
import OtpInput from 'otp-input-react';

function Login() {
         //state = { otp: '' };
const [otp,setotp] = useState('')
      function handleChange (otp) {setotp({ otp });}
    return (


        <div className="signin">

            <div className="signin-container">
                <div className="signin-header_1">
                    <h3 className='acc'>Welcome Back</h3>

                    <p>Please Sign In to Continue</p>

                </div>
                <div className="signin-form">
                    <form className='group'>
                        <div className="form-group">
                            <OtpInput className='otp'
                                value={otp}
                                onChange={setotp}
                                autoFocus
                                OTPLength={4}
                                 otpType="number" 
                                 disabled={false}
                                secure
                                
                            />
                        </div>
                        <div className='bttn'>
                            <button className='otp-btn'>Send otp</button>
                            <button className='otp-btn'>SignIn</button>
                            
                            
                            {/* <button className='resend'>Resend OTP</button> */}
                        </div>
                    </form>
                </div>
                <div className='here'><Link to='/login'>Login with Password</Link></div>

                <div className='here'><Link to='/Signup'>New User Signup Here</Link></div>

            </div>
            <div className='comp'> <img className='pic' src={back} alt='' /></div>
        </div >


    )
}

export default Login


