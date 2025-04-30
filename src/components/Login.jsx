import '../assets/login.css'
import React from 'react'

function Login(){
    return (
        <div className="login-container">
            <div className="login-card">
                <h3 className="login-title">Login To Your Account</h3>
                <form className="login-form">
                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                    />
                    <button className="login-button">Login</button>
                </form>
                <div className="login-links">
                    <a href="/reset-password" className="login-link">
                        Forgot Password?
                    </a>
                    <a href="/signup" className="login-link">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Login