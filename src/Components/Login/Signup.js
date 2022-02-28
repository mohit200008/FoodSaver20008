import React from 'react'
import { useRef, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { login, logout, signup, useAuth } from '../../firebase-config'
import './Login.css'
function Signup(){
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignUp(){
        setLoading(true)
        try {
     
        await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
        alert("Error!");
    }
    setLoading(false);
    }
    if (currentUser) {
        return <Redirect to="/" />;
    }
    async function handleLogOut(){
        setLoading(true);
        try{
            await logout();
        } catch{
            alert("Error!");
        }
        setLoading(false);
    }
    
    return (
        <div className='signup'>
                    <div className='signup-container'>
                <div className='signup-header'>
               <h3 className='acc'>Create Account</h3>
                    <p>Please SignUp To Continue</p>
                </div>
                <div className='signup-form'>
                    <form className='group_1'>
                        <div className="form-group">
                            <input ref={emailRef} type="email" className="form-control_1" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input ref ={passwordRef} type="password" className="form-control_1" id="password" placeholder="Password" />
                            {/* <input type="password" className="form-control_1" id="password" placeholder="Confirm Password" /> */}
                        </div>
                        <button disabled={loading || currentUser} onClick={handleSignUp} type="button" className='otp-btn_1'>Sign Up</button>
             
                    </form>
                </div>
                <div className='here_1'><Link to='/Login'>Already have an account?</Link></div>
            </div>
        </div>
          
    )
}
export default Signup