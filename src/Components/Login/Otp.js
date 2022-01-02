
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import OtpInput from 'react-otp-input';

function Login() {
    //     state = { otp: '' };

    //   handleChange = (otp) => this.setState({ otp });
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
                                // value={this.state.otp}
                                // onChange={this.handleChange}
                                value={126578}  //hardcoded
                                onChange={0}
                                numInputs={6}
                                // separator={<span>-</span>}
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


