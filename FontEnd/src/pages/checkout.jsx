import React, { Component } from 'react';
import "./checkout.css";
import { Link } from 'react-router-dom';


class Checkout extends Component {
    state = {}
    render() {
        return (
            <div className="backgroundCheckout">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h3>Địa chỉ thanh toán</h3>
                        </div>
                        <div className="col-lg-5">
                            <h3>Sản phẩm<span className="colorSpan">(7 sản phẩm)</span></h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 ">
                            <form className="backgroundContainerCheckout">
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Họ và tên:</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="text" class="form-control" id="nameUser" placeholder="Họ và tên" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Công ty:</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="text" class="form-control" id="nameCompany" placeholder="Công ty" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Số điện thoại:</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="text" class="form-control" id="phoneUser" placeholder="Số điện thoại" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable " for="exampleInputEmail1 ">Tỉnh/Thành phố:</label>
                                        </div>
                                        <div className="col-md-9">
                                            <select class="form-control selectBoxAddress" id="cityUser">
                                                <option>Tỉnh/Thành phố</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Quận huyện</label>
                                        </div>
                                        <div className="col-md-9">
                                            <select class="form-control selectBoxAddress" id="districtUser">
                                                <option>Quận huyện</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Phường xã</label>
                                        </div>
                                        <div className="col-md-9">
                                            <select class="form-control selectBoxAddress" id="wardsUser">
                                                <option>Phường xã</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label className="paddingLable" for="exampleInputEmail1 ">Địa chỉ</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="text" class="form-control addressDetailHeight" id="addressDetail" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                            <h3 className="h3Padding">Phương thức thanh toán</h3>
                            <form className="backgroundContainerCheckout">
                                <div class="custom-control custom-radio paddingBottomRadio">
                                    <input type="radio" id="paymentOnDelivery" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="paymentOnDelivery">Thanh toán khi nhận hàng</label>
                                </div>
                                <div class="custom-control custom-radio paddingBottomRadio">
                                    <input type="radio" id="paymentInternationalCard" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="paymentInternationalCard">Thanh toán bằng thẻ quốc tế Visa, Master, JCB</label>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-4">
                                                <img class="card-img-top boderimg imgSizePayment" src={(require('../img/checkoutIMG/visa-icon.png'))} />
                                            </div>
                                            <div className="col-md-4">
                                                <img class="card-img-top boderimg imgSizePayment" src={(require('../img/checkoutIMG/master-card-icon-13.jpg'))} />
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <form className="backgroundContainerCheckout">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <label className="paddingLable" for="exampleInputEmail1 ">Họ và tên:</label>
                                                        <input type="text" class="form-control" id="nameUser" placeholder="Họ và tên" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div class="container containerBoderVisaCard">

                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                    <h2 className="h2Visa">Visa</h2>
                                                                    </div>
                                                                    <div className="col-md-4"></div>
                                                                    <div className="col-md-4"><img class="card-img-top imgSizeVisaCard" src={(require('../img/checkoutIMG/visa-icon.png'))} /></div>

                                                                </div>
                                                                <div class="upper_Payment">
                                                                    <h6>Credit</h6>
                                                                    <h4>Visa</h4>
                                                                </div>
                                                                <div class="lower">
                                                                    <h5>Samuel Richard</h5> <span>4564 - 3432 - 3434 - 1236</span>
                                                                </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div class="custom-control custom-radio paddingBottomRadio">
                                    <input type="radio" id="paymentWithWallet" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="paymentWithWallet">Thanh toán ví online</label>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Link to="/"><img class="card-img-top boderimg imgSizePayment" src={(require('../img/checkoutIMG/paypallogo.png'))} /></Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to="/"><div className="container containerMono"><img class="card-img-top boderimg imgSizeMomo" src={(require('../img/checkoutIMG/logo-momo.jpg'))} /></div></Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to="/"><img class="card-img-top boderimg imgSizePayment" src={(require('../img/checkoutIMG//vnpay-qrcode-1.png'))} /></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5  ">
                            <div className="container backgroundContainerCheckout fixed">
                                <div class="card cardShadowTotal">
                                    <div class="card-body">
                                        <h3 class="textCenterTotal textPaddingTotal">Tổng thanh toán</h3>
                                        <h3 class="textCenterTotal textPaddingTotal">10.000.000đ</h3>
                                    </div>
                                </div>
                                <div class="card borderCardPriceParent paddingCardTotalBottom">
                                    <div class="card borderCardPriceChild ">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-8">
                                                    <span>
                                                        Giày Thể Thao Cao Cấp Nữ Biti’s Hunter X - Summer 2K19 ADVENTURE COLLECTION - Orange DSWH01100CAM (Cam)
                                                </span>
                                                </div>
                                                <div className="col-4 alignmentRightPrice">
                                                    <span className="redHightlightPriceCardTotal">
                                                        300.000.000đ
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4><hr /></h4>
                                    <div class="card borderCardPriceChild ">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-8">
                                                    <span>
                                                        Giày Thể Thao Cao Cấp Nữ Biti’s Hunter X - Summer 2K19 ADVENTURE COLLECTION - Orange DSWH01100CAM (Cam)
                                                </span>
                                                </div>
                                                <div className="col-4 alignmentRightPrice">
                                                    <span className="redHightlightPriceCardTotal">
                                                        300.000.000đ
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4><hr /></h4>
                                    <div class="card borderCardPriceChild ">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div className="col-8">
                                                    <span>
                                                        Giày Thể Thao Cao Cấp Nữ Biti’s Hunter X - Summer 2K19 ADVENTURE COLLECTION - Orange DSWH01100CAM (Cam)
                                                </span>
                                                </div>
                                                <div className="col-4 alignmentRightPrice">
                                                    <span className="redHightlightPriceCardTotal">
                                                        300.000.000đ
                                                </span>
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

export default Checkout;