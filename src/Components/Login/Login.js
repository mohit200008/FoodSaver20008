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

    const login = e => {
        e.preventDefault()
        console.log('Sign in')
        auth
            .signInWithEmailAndPassword(email, password)
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
            
            <div className="signin-container">
                <div className="signin-header">
                    <Link to="/" className="homepage" ><h3>FoodSaver</h3></Link>
                    <h2>sign in / Sign Up</h2>
                    <p>signIn to your account</p>
                </div>
                <div className="signin-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email"><h5>Email</h5></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange=
                        {e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><h5>Password</h5></label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange=
                        {e => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={login}className="signin-btn">Sign in</button>
                            <Link to="/ForgotPage" ><button className="lost" >Lost Password?</button></Link>
                        </div>
                        <div className="form-group">
                            <h6 className="h6">Don't have an account?</h6>
                            <button type="submit" onClick={register}  className="register-button">Create Your Account</button>
                        </div>
                    </form>
                  

                </div>
            </div>
        </div>
    )
}
         
export default Login
