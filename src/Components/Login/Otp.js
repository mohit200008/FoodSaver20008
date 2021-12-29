
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React, { Components } from 'react'
import OtpInput from 'react-otp-input';

function Login() {
    //     state = { otp: '' };

    //   handleChange = (otp) => this.setState({ otp });
    return (


        <div className="signin">

            <div className="signin-container">
                <div className="signin-header">
                    <h3 className='acc'>Welcome Back</h3>

                    <p>Please Sign In to Continue</p>

                </div>
                <div className="signin-form">
                    <form className='group'>
                        <div className="form-group">
                            <input type="email" className="control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <OtpInput className='otp'
                                // value={this.state.otp}
                                // onChange={this.handleChange}
                                value={126578}  //hardcoded
                                onChange={0}
                                numInputs={6}
                                separator={<span>-</span>}
                            />
                            {/* <input type="otp" className="control" id="password" placeholder="Otp" /> */}
                        </div>
                        <button className='otp-btn'>Send otp</button>
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


