import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
import Cookies from "js-cookie";
import { useCookies, remove } from 'react-cookie';
class Header extends Component {
    state = {
        fullname: ""
    }
    cookieUser = ()=>{ 
        const loginInfoStr = Cookies.get('loginInfo');
        if(loginInfoStr){
            const loginInfos = JSON.parse(loginInfoStr);
            this.setState({fullname : loginInfos.fullName})
        }
    }
    logout = ()=>{
        // Cookies.set('loginInfo', 'value', { path: '/home' });
        // Cookies.remove('loginInfo'); // fail!
        // Cookies.remove('loginInfo', { path: '/home' });
        // Cookies.remove('loginInfo');
        console.log(this.state.fullname);
        Cookies.remove('loginInfo', { path: '/', domain: 'localhost' });
        this.setState({fullName:" "})
    }
    render() {
        return (
            <div>
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src={require('../img/logo/ShoeIcon.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="header-area">
                        <div className="main-header ">
                            <div className="header-top top-bg d-none d-lg-block">
                                <div className="container-fluid">
                                    <div className="col-xl-12">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="header-info-left d-flex">
                                                <div className="flag">
                                                    <img src={require('../img/ShopShoeOnline/Flag_of_Vietnam.png')} />
                                                </div>
                                                <div className="select-this">
                                                    <form action="#">
                                                        <div className="select-itms">
                                                            <select name="select" id="select1">
                                                                <option value="">VIE</option>
                                                                <option value="">USA</option>

                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                                <ul className="contact-now">
                                                    <li>+777 2345 7886</li>
                                                </ul>
                                            </div>
                                            <div className="header-info-right">
                                                <ul>
                                                    <li><Link to="/profile">Tài Khoản Của Tôi</Link></li>
                                                    <li><Link to="/wishlist">Sản Phẩm Yêu Thích</Link></li>
                                                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                                                    <li><Link to="/checkout">Thanh Toán</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-bottom">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                            <div className="logo img">
                                                <Link className="nav-link" to='/home' ><img src={require('../img/logo/LogoShop11.png')} /></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                                            <div className="main-menu f-right d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><Link to="/productList">TẤT CẢ SẢN PHẨM</Link></li>
                                                        <li ><a href="#">NAM</a>
                                                            {/* <ul className="submenu">
                                                                <li><a href="product_list.html"> Product list</a></li>
                                                                <li><a href="single-product.html"> Product Details</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><Link to="blog.html">NỮ</Link>
                                                            {/* <ul className="submenu">
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><a href="#">BÉ TRAI </a>
                                                            {/* <ul className="submenu">
                                                                <li><a href="login.html">Login</a></li>
                                                                <li><a href="cart.html">Card</a></li>
                                                                <li><a href="elements.html">Element</a></li>
                                                                <li><a href="about.html">About</a></li>
                                                                <li><a href="confirmation.html">Confirmation</a></li>
                                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                                <li><a href="checkout.html">Product Checkout</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><a href="contact.html">BÉ GÁI</a></li>
                                                        <li className="hot"><a href="/productList">SALE</a></li>
                                                        <li><a href="/productList">LIÊN HỆ</a></li>
                                                        <li><a href="/productList">GIỚI THIỆU</a></li>

                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                            <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                                <li className="d-none d-xl-block">
                                                    <div className="form-box f-right ">
                                                        <input type="text" name="Search" placeholder="Tìm kiếm....." />
                                                        <div className="search-icon">
                                                            <i className="fas fa-search special-tag"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=" d-none d-xl-block">
                                                    <div className="favorit-items">
                                                        <Link to="/wishlist"><i className="far fa-heart"></i></Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-card">
                                                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                                                    </div>
                                                </li>
                                                
                                               {Cookies.get("loginInfo")?
                                               <div>
                                                <img className="btnUser" onClick={this.cookieUser} src={require('../img/Shoe/avatar.jpg')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                <div className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.cookieUser}><i class="fas fa-chevron-down btnChevron-down btn"></i></div>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            
                                                            <p class="">Tên: {this.state.fullname}</p>
                                                            <a class="dropdown-item" href="#">Đơn hàng của tôi</a>
                                                            <a class="dropdown-item" href="#">Tài khoản của tôi</a>
                                                            <i class="btn dropdown-item" onclick={this.logout}>Đăng xuất</i>
                                                        </div>
                                                </div>:<li className="d-none d-lg-block"> <Link className="nav-link btn btn1 header-btn" to='/login'>Đăng nhập</Link></li>
                                                }

                                            </ul>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
            </div>
        );
    }
}
export default Header;