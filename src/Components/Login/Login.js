import React from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom'
import { auth } from '../../firebase'
import {Link} from 'react-router-dom'
// import {NavBar} from './NavBar'


function Login() {
    const history = useHistory();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const LogIn = e => {
        e.preventDefault()
        console.log('Sign in')
        auth.logInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        console.log('Register')
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // it succesfully created a user
                // console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => {

                // it failed to create a user
                alert(error.message)
                // console.log(error)
            })
    }
    return (
        <div className="signin">
            
            <div className="signin-content">
                <div className="signin-header">
                    <Link to="/">Signin</Link>
                    <p>Login to your account</p>
                </div>
                <div className="signin-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email"><h5>Email</h5></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><h5>Password</h5></label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        </div>
                        <div className="form-group">
                            <Link to="/register">Don't have an account?</Link>
                            {/* <button type="submit" className="signin_register_button">Create Your Account</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

                //  <img className="signin__logo" src=""/>
            


               
export default Login
