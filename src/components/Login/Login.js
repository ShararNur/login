import React from 'react';
import './Login.css';
import img from '../../resource/Group 312.png';
import logo from '../../resource/blue-logo 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
    return (
        <div className="main">
            <div className="side-part">
                <img src={img} alt="" className="bg-img" />
            </div>
            <div className="login-panel">
                <div className="login-form text-center">
                    <div>
                        <img src={logo} alt="" className="logo" />
                    </div>
                    <h4 className=" heading text-center">Explore The Best Tours... Hurry up!!</h4>
                    <form>
                        <div className="mb-3">

                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <p className="txt-red" style={{ fontWeight: '400' }}>Forgot Password?</p>
                        <button type="submit" className="btn btn-primary loginbtn fw-bold">LOG IN</button>

                        <div className="optional mt-5 fw-bold">
                            <p className="or"><span>or</span></p>
                        </div>

                        <div className="mt-4">
                            <a href="" className="me-5"><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#4267B2 ' }} /></a>
                            <a href=""><FontAwesomeIcon icon={faGoogle} size="2x" style={{ color: '#4285F4 ' }} /></a>
                        </div>
                        <p className="mt-4">Don't have an account? <a href="" className="signup">Sign Up</a> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;