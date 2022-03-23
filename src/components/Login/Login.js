import React from 'react';
import './Login.css';
import logo from '../../resource/blue-logo 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
    return (
        <div className="main d-flex">
            <div className="left-side">
                <div className="bg-img">
                    {/* Added background image */}
                </div>
            </div>

            <div className="container">
                <div className="right-side">
                    <div className="login-box">
                        <div className="inner-box">
                            <div className="top-part text-center">
                                <img src={logo} alt="" className="logo mb-3 mt-5" />
                            </div>
                            <h4 className="heading text-center">Explore The Best Tours... Hurry up!!</h4>
                            <form className="custom-width">
                                <div className="mb-3">
                                    <input type="email" className="form-control cst-border" placeholder="Email Address" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control cst-border" placeholder="Password" />
                                </div>

                                <a href="#" className="forget-pass mb-3">Forget Password?</a>

                                <button type="submit" className="btn btn-primary login-btn fw-bold mb-4">LOG IN</button>

                                <p className="txt-or fw-bold mb-5"><span className="alternate">or</span></p>

                                <div className="icon mb-4">
                                    <a href="#" className="fb-icon"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    <a href="#" className="google-icon"><FontAwesomeIcon icon={faGoogle} size="2x" /></a>
                                </div>

                                <p className="text-muted text-center">Don't have an account? <a href="#" className="sign-up fw-bold">Sign Up</a> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;