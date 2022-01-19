
import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Food from '../Fridge/Fridge'
import Recipepage from '../Recipe/RecipePage'
import HomePage from '../Home/HomePage'
import HomeHindi from './HomeHindi'
import Creativity from '../Creativity/Creativity'
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import Otp from '../Login/Otp'
import './Home.css'

//hindi content
import HomeinHindi from "../Home/HomeinHindi"
import NavBar_in_Hindi from "../NavBar/NavBar_in_Hindi"

export default class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Router>
                    <div>
                        <NavBar/>
                        <div className='component-container'>
                        <Route exact path='/' render={(props) => <HomePage {...this.props} />} />
                        <Route exact path='/hi' render={(props) => <HomeHindi {...this.props} />} />
                        <Route exact path='/food' render={(props) => <Food {...this.props} />} />
                        <Route exact path='/recipepage' component={Recipepage} />
                        <Route exact path='/creativity' component={Creativity} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/otp' component={Otp} />

                       {/* hindi content */}

                        <Route exact path='/homeinhindi' render={(props) => <HomeinHindi {...this.props} />} />
                        <Route exact path='/navinhindi' element={<NavBar_in_Hindi/>} />



                       </div>
                    </div>
                </Router>
            </div>
        )
    }
}
