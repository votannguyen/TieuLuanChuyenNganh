import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";
import LoginUser from "../../services/UserService";
import "../login/login.css";
class Login extends Component {
    state = {
        message: " ",
        isLogin: false,

    }
    emailRef = React.createRef();
    passwordRef = React.createRef();
    login = () => {
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        console.log(email, password)
        LoginUser.login(email, password).then(res => {

            this.setState({ message: "Đăng nhập thành công:" });
            alert("Bạn đã đăng nhập thành công");
            console.log(res.data.errorCode);
            //save cookie
            // Cookies.set('loginInfo', brcypt.hashSync(JSON.stringify(res.data),9), { expires: 1 });
            Cookies.set('loginInfo', JSON.stringify(res.data.token), { expires: 1/24 });
            //redirect to dashboard
            this.props.history.push({ pathname: '/' })

            if (res.data.message === "Email or Password is invalid") {
                alert('Tài khoảng không tồn tại hoặc mật khẩu không đúng');
            }
            // this.setState({message : "Tài khoảng không tồn tại hoặc mật khẩu không đúng"})
            // console.log(this.message);
        })
    }
    render() {
        return (
            <div className="loginbackground">
                <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center data-background-login">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="login_part section_padding ">
                    <div class="container">
                        <div class="row align-items-center formRightbackground radiusFormLogin">
                            <div class="col-lg-6 col-md-6">
                                <div class="login_part_text text-center">
                                    <div class="login_part_text_iner">
                                        <h2>Bạn là khách hàng mới?</h2>
                                        <p>Hãy nhanh tay đăng ký tài khoản ngay để nhận được ưu đãi cho người mới và nhiều ưu đãi khác</p>
                                        <Link to="/register" class="btn_3">Create an Account</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="login_part_form">
                                    <div class="login_part_form_iner">
                                        <h3>Chào mừng bạn trở lại ! <br />
                                            Vui lòng đăng nhập ngay bây giờ</h3>
                                        <div class="row contact_form ">
                                            <div className="text-center text-danger">{this.state.message}</div>
                                            <br />
                                            <div class="col-md-12 form-group p_star">
                                                <input type="email" class="form-control withTextBox" id="name" name="name" ref={this.emailRef}
                                                    placeholder="email" />
                                            </div>
                                            <div class="col-md-12 form-group p_star">
                                                <input type="password" class="form-control withTextBox" id="password" name="password" ref={this.passwordRef}
                                                    placeholder="Password" />
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <div class="creat_account d-flex align-items-center">
                                                    <input type="checkbox" id="f-option" name="selector" />
                                                    <label for="f-option">Remember me</label>
                                                </div>
                                                <button type="submit" onClick={this.login} class="btn_3">
                                                    log in
                                                </button>
                                                <a class="lost_pass" href="#">forget password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;