import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./invoiceDetail.css";
class InvoiceDetail extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() { 
        return ( 
            <div className="backGroundLayoutInvoiceDetail">
                <div className="container paddingContainerMain">
                <h3>Chi tiết đơn hàng (Mã Đơn hàng)</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="pAddress">ĐỊA CHỈ NHẬN HÀNG</p>
                        <div className="container backgroundContainerMain">
                            <p className="pNameReceiver">TÊN NGƯỜI NHẬN</p>
                            <p className="pAddressReceiver">Địa chỉ: 1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh</p>
                            <p className="pPhoneReceiver">Số điện thoại: 02355985482</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="pAddress">HÌNH THỨC THANH TOÁN</p>
                        <div className="container backgroundContainerMain">
                            <p className="pPaymentReceiver">Thanh toán tiền mặt khi nhận hàng</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container backgroundContainerExtra">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="pProduct">Sản phẩm</p>
                        </div>
                        <div className="col-lg-1">
                        <p className="pProductPrice">Giá</p>
                        </div>
                        <div className="col-lg-1">
                        <p className="pProductQuantity">Số lượng</p>
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductDiscount">Giảm giá</p>
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductRight">Tạm tính</p>
                        </div>
                    </div>
                    <hr className="sizeHR"></hr>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img id="" class="card-img-top boderimg_Pro imgThumbnailProductDetail" src={(require('../../img/Shoe/vans.png'))} />

                                </div>
                                <div className="col-lg-9">
                                    <p className="pProductCell">VANS CLASSIC SK8-HI MOSS GREEN - CHÍNH HÃNG</p>
                                    <p>Thương hiệu: <Link className="linkColor">Vans</Link></p>
                                    <p>Mã SP: 654616as3161</p>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="buttonReturns"><Link className="">Trả hàng</Link></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="buttonReturns"><Link className="">Mua lại</Link></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1">
                        <p className="pProductPriceCell">100.000.000đ</p>
                        </div>
                        <div className="col-lg-1">
                        <p className="pProductQuantityCell">10</p>
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductDiscountCell">10.000.000đ</p>
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductRightCell">Tạm tính</p>
                        </div>
                    </div>
                    <hr className="sizeHR"></hr>
                    <div className="row">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-1">
                        
                        </div>
                        <div className="col-lg-1">
                        
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductRight marginBottomCalculator">Tạm tính</p>
                        <p className="pProductRight marginBottomCalculator">Giảm giá</p>
                        <p className="pProductRight marginBottomCalculator">Phí vận chuyển</p>
                        <p className="pProductRight">Tổng cộng</p>
                        </div>
                        <div className="col-lg-2">
                        <p className="pProductRight marginBottomCalculator">100.000.000đ</p>
                        <p className="pProductRight marginBottomCalculator">10.000.000đ</p>
                        <p className="pProductRight marginBottomCalculator">0đ</p>
                        <p className="pProductRight priceHightlight">90.000.000đ</p>
                        </div>
                    </div>
                </div>

                </div>
                
            </div>
         );
    }
}
 
export default InvoiceDetail;