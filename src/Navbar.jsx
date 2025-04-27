import React from 'react'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import img from './assets/img/logo.png'

import './Navbar.css'
const Navbar = () => {
    return (
        <div >
            <nav className='navContainer'>
                <div id='leftNav'>
                    <div id="logo">
                        <img src={img} alt=" Logo " />
                    </div>
                    <div id="collegeName">
                        <h1>MARYLAND INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h1>
                        <p>AFFILIATED TO JHARKHAND UNIVERSITY OF TECHNOLOGY</p>
                    </div>
                </div>
                <div id="midNav">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>

                </div>
                <div id="login">
                    <button>Log In</button>
                    <div id='loginMenu'>
                        <Link to='/AdminLogin'>Admin Login</Link>
                        <Link to='/TeacherLogin' >Teacher Login</Link>
                        <Link to='/StudentLogin'>Student Login</Link>
                    </div>
                   
                </div>
            </nav>
            <div className="blank-space"></div>
        </div>
    )
}

export default Navbar;