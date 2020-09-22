import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {}
    render() {
        return (
            <div>
                <div id="preloader-active">
                    <div class="preloader d-flex align-items-center justify-content-center">
                        <div class="preloader-inner position-relative">
                            <div class="preloader-circle"></div>
                            <div class="preloader-img pere-text">
                                <img src={require('../img/logo/ShoeIcon.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div class="header-area">
                        <div class="main-header ">
                            <div class="header-top top-bg d-none d-lg-block">
                                <div class="container-fluid">
                                    <div class="col-xl-12">
                                        <div class="row d-flex justify-content-between align-items-center">
                                            <div class="header-info-left d-flex">
                                                <div class="flag">
                                                    <img src={require('../img/ShopShoeOnline/Flag_of_Vietnam.png')} />
                                                </div>
                                                <div class="select-this">
                                                    <form action="#">
                                                        <div class="select-itms">
                                                            <select name="select" id="select1">
                                                                <option value="">VIE</option>
                                                                <option value="">USA</option>
                                                                
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                                <ul class="contact-now">
                                                    <li>+777 2345 7886</li>
                                                </ul>
                                            </div>
                                            <div class="header-info-right">
                                                <ul>
                                                    <li><Link to="/profile">Tài Khoản Của Tôi </Link></li>
                                                    <li><Link to="/wishlist">Sản Phẩm Yêu Thích  </Link></li>
                                                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                                                    <li><Link to="/checkout">Thanh Toán</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="header-bottom">
                                <div class="container-fluid">
                                    <div class="row align-items-center">
                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                            <div class="logo img">
                                                <Link className="nav-link" to='/home' ><img src={require('../img/logo/LogoShop11.png')} /></Link>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                                            <div class="main-menu f-right d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><Link to="/productList">TẤT CẢ SẢN PHẨM</Link></li>
                                                        <li ><a href="#">NAM</a>
                                                            {/* <ul class="submenu">
                                                                <li><a href="product_list.html"> Product list</a></li>
                                                                <li><a href="single-product.html"> Product Details</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><Link to="blog.html">NỮ</Link>
                                                            {/* <ul class="submenu">
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><a href="#">BÉ TRAI </a>
                                                            {/* <ul class="submenu">
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
                                                        <li class="hot"><a href="/productList">SALE</a></li>
                                                        <li><a href="/productList">LIÊN HỆ</a></li>
                                                        <li><a href="/productList">GIỚI THIỆU</a></li>

                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div class="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                            <ul class="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                                <li class="d-none d-xl-block">
                                                    <div class="form-box f-right ">
                                                        <input type="text" name="Search" placeholder="Tìm kiếm....." />
                                                        <div class="search-icon">
                                                            <i class="fas fa-search special-tag"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class=" d-none d-xl-block">
                                                    <div class="favorit-items">
                                                        <i class="far fa-heart"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="shopping-card">
                                                        <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                                                    </div>
                                                </li>
                                                <li class="d-none d-lg-block"> <Link className="nav-link btn btn1 header-btn" to='/login'>Đăng nhập</Link></li>
                                            </ul>
                                        </div>
                                        <div class="col-12">
                                            <div class="mobile_menu d-block d-lg-none"></div>
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