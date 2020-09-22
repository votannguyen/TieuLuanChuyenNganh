import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <br/>
                <br/>

                <footer>
                    <div class="footer-area footer-padding2 " >
                        <div class="container back">
                            <div class="row d-flex justify-content-between">
                                <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                    <div class="single-footer-caption mb-50">
                                        <div class="single-footer-caption mb-30">
                                            <div class="footer-logo">
                                                <a href="index.html"><img src={require('../img/logo/logo2_footer.png')} /></a>
                                            </div>
                                            <div class="footer-tittle">
                                                <div class="footer-pera">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                    <div class="single-footer-caption mb-50">
                                        <div class="footer-tittle">
                                            <h4>Link Nhanh</h4>
                                            <ul>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#"> Offers & Discounts</a></li>
                                                <li><a href="#"> Get Coupon</a></li>
                                                <li><a href="#">  Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                    <div class="single-footer-caption mb-50">
                                        <div class="footer-tittle">
                                            <h4>Sản Phẩm Mới</h4>
                                            <ul>
                                                <li><a href="#">Giày Nam</a></li>
                                                <li><a href="#">Giầy Nữ</a></li>
                                                <li><a href="#">Giầy Bé Trai</a></li>
                                                <li><a href="#">Giày Bé Gái</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                    <div class="single-footer-caption mb-50">
                                        <div class="footer-tittle">
                                            <h4>Trợ Giúp</h4>
                                            <ul>
                                                <li><Link to="/">Trạng thái đơn hàng</Link></li>
                                                <li><Link to="/">Hình thức giao hàng</Link></li>
                                                <li><Link to="/">Hình thức thanh toán</Link></li>
                                                <li><Link to="/">Chính sách đổi trả</Link></li>
                                                <li><Link to="/">Chính sách bảo hành</Link></li>
                                                <li><Link to="/">Chính sách khách hàng thân thiết</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-7 col-lg-7 col-md-7">
                                    <div class="footer-copy-right">
                                        <p>
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>                </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-5">
                                    <div class="footer-copy-right f-right">
                                        <div class="footer-social">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-behance"></i></a>
                                            <a href="#"><i class="fas fa-globe"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;