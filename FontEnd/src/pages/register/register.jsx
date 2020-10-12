import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../register/register.css'
class Register extends Component {
    state = {}
    render() {
        return (
            <div className="backgroundRegister">
                {/* <!-- Register Section Begin --> */}
                <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center data-background-register">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Register</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="register-login-section spad ">
                    <div class="container shadowContainer backgrounsColorRegisterForm">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="register-form">
                                    <form action="#">
                                        <div class="group-input">
                                            <label for="username">Email address <i className="redStar">*</i></label>
                                            <input type="email" id="username" placeholder="Input Email" className="backgroundColorInput"/>
                                        </div>
                                        <div class="group-input">
                                            <label for="pass">Password <i className="redStar">*</i></label>
                                            <input type="password" id="pass" placeholder="Input Password" className="backgroundColorInput" />
                                        </div>
                                        <div class="group-input">
                                            <label for="con-pass">Confirm Password <i className="redStar">*</i></label>
                                            <input type="password" id="con-pass" placeholder="Confirm Password" className="backgroundColorInput"/>
                                        </div>
                                        <button type="submit" class="btn_3 register-btn">REGISTER</button>
                                    </form>
                                    <div class="switch-login">
                                        <Link className="nav-link" to="/login" class="or-login">Or Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Register Form Section End -->
    
    <!-- Partner Logo Section Begin --> */}
                <div class="partner-logo">
                    <div class="container">
                        <div class="logo-carousel owl-carousel">
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={require('../..')} />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={require('../..')} />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={require('../..')} />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={require('../..')} />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={require('../..')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Partner Logo Section End --></div> */}
            </div>
        );
    }
}

export default Register;