import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ logOut }) => {
    return (
        <div className='navbar'>
            <div className='link-container'>
            <NavLink className='link' to='/'>
                <h4 className='link navbar-title'>FoodSaver</h4></NavLink>
                <span className='links'>
                    <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/food'>Add Food</NavLink>
                    <NavLink className='link' to='/recipepage'>Recipe</NavLink>
                    <NavLink className='link' to='/creativity'>Creativity</NavLink>
                    <NavLink className='link' to='/Login'>login</NavLink>
                    <NavLink className='link' to='/hi' style={{color: "#00ff00"}}>अ/Aa</NavLink>
                </span>
            </div>
        </div>
    );
}

export default NavBar;
