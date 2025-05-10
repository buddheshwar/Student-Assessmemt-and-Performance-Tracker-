import React from 'react'
import img from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const AdminTopNavbar = () => {
  return (
    <div>
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
        <div id="login">
          <button>Log out</button>
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

export default AdminTopNavbar