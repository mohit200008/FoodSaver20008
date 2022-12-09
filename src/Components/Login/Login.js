
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import { useRef, useState } from 'react'
import { useAuth, logout, login } from '../../firebase-config'

function Login() {

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogOut(){
        setLoading(true);
        try{
            await logout();
        } catch{
            alert("Error!");
        }
        setLoading(false);
    }
    async function handleLogIn(){
        setLoading(true)
        try {
     
        await login(emailRef.current.value, passwordRef.current.value)
    } catch {
        alert("Error!");
    }
    setLoading(false);
    }
    return (         
        <>
     {  !currentUser && <div className="signin">
        
        <div className="signin-container">
            <div className="signin-header">
               <h3 className='acc'>Welcome Back</h3>

                <p>Please Sign In to Continue</p>

            </div>
            <div className="signin-form">
                <form className='group_0'>
                    <div className="form-group_0">
                        <input ref={emailRef} type="email/phone" className="control_0" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group_0">
                        <input ref ={passwordRef} type="password" className="control_0" id="password" placeholder="Password" />
                    </div>
                    <button disabled={loading || currentUser} onClick={handleLogIn} className='otp-btn_1'>Signin</button>
                          </form>
            </div>
            <div className='here'><Link to='/Otp'>Login with Otp</Link></div>
            <div className='here'><Link to='/Signup'>New User Signup Here</Link></div>

        </div>

       <div className='comp'> <img  className='pic' src={back} alt='' /></div>
    </div >}
    { currentUser &&  <button disabled={loading || !currentUser} onClick={handleLogOut} type="button" className='otp-btn_1'>Sign Out</button>    }

    </>
    )
}

export default Login


