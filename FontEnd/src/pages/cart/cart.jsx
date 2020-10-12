import React, { Component } from "react";
import "../cart/cart.css";
import { Link } from 'react-router-dom';
class Cart extends Component {
    state = {};
    render() {
        return (
            <div className="backgrColor">
                <br />
                <br />
                <h4 className="paddingLeftTitleCart">GIỎ HÀNG <span className="colorSpan">(7 sản phẩm)</span></h4>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div class="card boderCard">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <img class="card-img-top resizeImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-7">
                                                    <a className="fontSize_a">
                                                        Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu Làm Giàu - Bìa Mềm (Tái Bản 2020)
                                                    <br />
                                                    </a>
                                                    <p className="pCart pPaddingTop fontSize_p_span">
                                                        <span>
                                                            Nhóm:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Giày chạy</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <span>
                                                            Hãng sản xuất:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Adidas</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <Link className="defaultDelete" to="/">Xóa</Link>
                                                    </p>

                                                </div>
                                                <div className="col-5">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <p className="fontFamilyPriveCardProduct">300.000.000đ</p>
                                                            
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="boderQuantitiyProduct">
                                                        <input  type="number" defaultValue="1" min="1" max="10" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card boderCard">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <img class="card-img-top resizeImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-7">
                                                    <a className="fontSize_a">
                                                        Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu Làm Giàu - Bìa Mềm (Tái Bản 2020)
                                                    <br />
                                                    </a>
                                                    <p className="pCart pPaddingTop fontSize_p_span">
                                                        <span>
                                                            Nhóm:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Giày chạy</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <span>
                                                            Hãng sản xuất:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Adidas</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <Link className="defaultDelete" to="/">Xóa</Link>
                                                    </p>

                                                </div>
                                                <div className="col-5">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <p className="fontFamilyPriveCardProduct">300.000.000đ</p>
                                                            
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="boderQuantitiyProduct">
                                                        <input  type="number" defaultValue="1" min="1" max="10" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card boderCard">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <img class="card-img-top resizeImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-7">
                                                    <a className="fontSize_a">
                                                        Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu Làm Giàu - Bìa Mềm (Tái Bản 2020)
                                                    <br />
                                                    </a>
                                                    <p className="pCart pPaddingTop fontSize_p_span">
                                                        <span>
                                                            Nhóm:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Giày chạy</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <span>
                                                            Hãng sản xuất:
                                                        </span>
                                                        <Link className="defaultLink" to="/">Adidas</Link>
                                                    </p>
                                                    <p className="pCart fontSize_p_span">
                                                        <Link className="defaultDelete" to="/">Xóa</Link>
                                                    </p>

                                                </div>
                                                <div className="col-5">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <p className="fontFamilyPriveCardProduct">300.000.000đ</p>
                                                            
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="boderQuantitiyProduct">
                                                        <input  type="number" defaultValue="1" min="1" max="10" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="container fixed">
                                <div class="card cardMagin">
                                    <div class="card-body">
                                        <h5 class="card-title fontTitleCardCoupon">Mã giảm giá   <i className="fas fa-tags colorTagCoupon"></i></h5>
                                        <input className="text textBoxCoupon" id="Coupon" placeholder="Nhập mã giảm giá"></input>
                                        <div className="rightButton">
                                        <button  type="submit" value="submit" class="btn_3 btn_3-submit-coupon">
                                            Áp dụng
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card borderCardPriceParent">
                                    <div class="card borderCardPriceChild ">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-6">
                                                    <span>
                                                        Tạm tính
                                                </span>
                                                </div>
                                                <div className="col-6 alignmentRightPrice">
                                                    <span>
                                                        3.000.000đ
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4><hr /></h4>
                                    <div class="card borderCardPriceChild">
                                        <div class="card-body">
                                            <div class="row">
                                                <div className="col-6">
                                                    <span>
                                                        Giảm giá
                                                </span>
                                                </div>
                                                <div className="col-6 alignmentRightPrice">
                                                    <span>
                                                        300.000đ
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4><hr /></h4>
                                    <div class="card borderCardPriceChild">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-4">
                                                    <span>
                                                        Thành tiền
                                                </span>
                                                </div>
                                                <div className="col-8 alignmentRightPrice">
                                                    <span className="colorTextTotal">
                                                        2.700.000đ
                                                </span>
                                                    <div class="w-100"></div>
                                                    <span className="vatTextFontSize">(Đã bao gồm thuế VAT)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card borderCardPriceChild">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-4">

                                                </div>
                                                <div className="col-8 alignmentRightPrice">
                                                    <Link to="/checkout"><button className="btn btn-info">Thanh toán</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default Cart;
