import React from 'react'
import formAdminImg from '../../assets/img/Admin.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentEmail = 'admin@gmail.com';
    const currentPassword = 'Pass123';
    const navigate = useNavigate();
   const {setUser} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form reload

        if (email.trim() === '' || password.trim() === '') {
            alert('Email and Password are required.');
            return;
        }
        else if (email === currentEmail.toLowerCase() && password ===currentPassword){
            alert('Login Successfully')
            setUser({role :'admin'})
            navigate('/Dashboard')
        }
        else {
            alert('Enter a Valid Details');
            return;
        }
    };

    return (
        <div className='form-container'>
            <form className="loginForm b-radius" id="adminLogIn" onSubmit={handleSubmit}>
                <div className="form-head">
                    <img src={formAdminImg} alt="Admin" className="form-head-img" />
                    <h2 className="form-head-h">Admin Login</h2>
                </div>

                <div className="form-input-sec">
                    <input
                        type="email"
                        id="form-input-1"
                        className="form-input b-radius"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="form-input-2"
                        className="form-input b-radius"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-btn-sec">
                    <button type="submit" id="form-btn-1" className="form-btn b-radius" >
                        Login
                    </button>
                    <Link id="form-btn-2" className="form-link">
                        Forgotten password?
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default AdminLogin;