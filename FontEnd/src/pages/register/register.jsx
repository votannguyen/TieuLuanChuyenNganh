import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';
import '../register/register.css'
class Register extends Component {
    state = {
        users: [],
        user: {}
    }
    save = () => {
        console.log('Thêm mới', this.state.user);
        // console.log(this.data.errorCode);
        UserService.register(this.state.user).then(res => {
            // console.log(res.data.errorCode);
            //this.props.history.push('/login')
            // if (res.data.errorCode === 0) {
            //     this.setState({ modalShow: false });
            //     this.loadData();
            // }
            // else {
            //     //show error
            // }
        });
    }
    InputOnChange = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra

        const newUser = { ...this.state.user, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.setState({ user: newUser });
        console.log(name, value);
    }
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
                                    <div>
                                        <div class="group-input">
                                            <label for="username">Họ và tên<i className="redStar">*</i></label>
                                            <input type="text" id="username" name="fullName" placeholder="Họ và tên" className="backgroundColorInput" onChange={this.InputOnChange} value={this.state.user.fullName || ''}/>
                                        </div>
                                        <div class="group-input">
                                            <label for="username">Địa chỉ email <i className="redStar">*</i></label>
                                            <input type="email" id="username" name="email" placeholder="Email" className="backgroundColorInput" onChange={this.InputOnChange} value={this.state.user.email || ''}/>
                                        </div>
                                        <div class="group-input">
                                            <label for="pass">Mật khẩu <i className="redStar">*</i></label>
                                            <input type="password" id="pass" name="password" placeholder="Mật khẩu" className="backgroundColorInput" onChange={this.InputOnChange} value={this.state.user.password || ''}/>
                                        </div>
                                        <div class="group-input">
                                            <label for="con-pass">Xác nhận mật khẩu <i className="redStar">*</i></label>
                                            <input type="password" id="con-pass" placeholder="Confirm Password" onChange={this.InputOnChange} className="backgroundColorInput" />
                                        </div>
                                        <button type="submit" class="btn_3 register-btn" onClick={this.save}>Đăng ký</button>
                                    </div>
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