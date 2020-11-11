import React, { Component } from 'react';
import "../checkout/checkout.css";
import { Link } from 'react-router-dom';
import CheckoutItem from './checkoutItem';


class Checkout extends Component {
    state = {
        closeFormInterCard:false,
        closeFormWallet: false
    }
    showFormInterCard(value){
        if (value === false) {
            this.setState({ closeFormInterCard: true });
            this.setState({ closeFormWallet: false });
        }
        else {
            this.setState({ closeFormInterCard: false });
        }

    }
    showFormWallet(value){
        if (value === false) {
            this.setState({ closeFormWallet: true });
            this.setState({ closeFormInterCard: false });
        }
        else {
            this.setState({ closeFormWallet: false });
        }

    }
    closeFormWalletAndInterCard(){
        this.setState({ closeFormInterCard: false });
        this.setState({ closeFormWallet: false });
    }
    render() {
        var { checkoutItem, cart } = this.props;
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
        return (
            <div className="backgroundCheckout">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h3>Địa chỉ thanh toán</h3>
                        </div>
                        <div className="col-lg-5">
                            <h3>Sản phẩm<span className="colorSpan">({this.resultProductInCart(cart)} sản phẩm)</span></h3>
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
                                    <input type="radio" id="paymentOnDelivery" name="customRadio" class="custom-control-input" onClick={() => this.closeFormWalletAndInterCard()}/>
                                    <label class="custom-control-label" for="paymentOnDelivery">Thanh toán khi nhận hàng</label>
                                </div>
                                <div class="custom-control custom-radio paddingBottomRadio">
                                    <input type="radio" id="paymentInternationalCard" name="customRadio" class="custom-control-input" onClick={() => this.showFormInterCard(this.state.closeFormInterCard)}/>
                                    <label class="custom-control-label" for="paymentInternationalCard">Thanh toán bằng thẻ quốc tế Visa, Master, JCB</label>
                                </div>
                                {this.state.closeFormInterCard ?
                                <div class="card paddingBottomRadioWalletCard">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-md-2">

                                            </div>
                                            <div className="col-md-4">
                                                <img class="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/visa-icon.png'))} />
                                            </div>
                                            <div className="col-md-4">
                                                <img class="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/master-card-icon-13.jpg'))} />
                                            </div>
                                            <div className="col-md-2">

                                            </div>
                                        </div>
                                        <form className="backgroundContainerCheckout1">
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <label className="paddingLable" for="exampleInputEmail1 ">Số thẻ:</label>
                                                        <input type="text" class="form-control" id="idCard" placeholder="VD: 4564 5265 2598 4587" />
                                                        <label className="paddingLable" for="exampleInputEmail1 ">Tên in trên thẻ:</label>
                                                        <input type="text" class="form-control" id="nameUserCard" placeholder="VD: NGUYEN VAN A" />
                                                        <label className="paddingLable" for="exampleInputEmail1 ">Ngày hết hạn:</label>
                                                        <input type="text" class="form-control" id="validDate" placeholder="VD: MM/YY" />
                                                        <label className="paddingLable" for="exampleInputEmail1 ">Mã bảo mật:</label>
                                                        <input type="text" class="form-control" id="securityCode" placeholder="VD: 123" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <div class="container containerBoderVisaCard">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <h2 className="h2Visa">Visa</h2>
                                                                </div>
                                                                <div className="col-md-4"></div>
                                                                <div className="col-md-4"><img class="card-img-top imgSizeVisaCard" src={(require('../../img/checkoutIMG/visa-icon.png'))} /></div>
                                                            </div>
                                                            <img class="card-img-top imgChipSize" src={(require('../../img/checkoutIMG/Chip-logo-3C162A3B9B-seeklogo.com.png'))} />

                                                            <p className="pIdCard">4564 - 3432 - 3434 - 1236</p>
                                                            <div className="row">
                                                                <div className="col-lg-7">
                                                                    <p className="pNameUserCard">Samuel Richard</p>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <p className="pNameValidDateCard">Valid date</p>
                                                                    <p className="pNameValidDateCard">04/22</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div> :null
                                }
                                
                                <div class="custom-control custom-radio paddingBottomRadio">
                                    <input type="radio" id="paymentWithWallet" name="customRadio" class="custom-control-input" onClick={() => this.showFormWallet(this.state.closeFormWallet)}/>
                                    <label class="custom-control-label" for="paymentWithWallet">Thanh toán ví online</label>
                                </div>
                                {this.state.closeFormWallet?
                                <div class="card">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Link to="/"><img class="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/paypallogo.png'))} /></Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to="/"><div className="container containerMono"><img class="card-img-top boderimg imgSizeMomo" src={(require('../../img/checkoutIMG/logo-momo.jpg'))} /></div></Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to="/"><img class="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG//vnpay-qrcode-1.png'))} /></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>:null
                                }
                            </form>
                        </div>
                        <div className="col-lg-5  ">
                        
                            <div className="container backgroundContainerCheckout fixed">
                            
                                <div class="card cardShadowTotal">
                                    <div class="card-body">
                                        <h3 class="textCenterTotal textPaddingTotal">Tổng thanh toán</h3>
                                        <h3 class="textCenterTotal textPaddingTotal">{formatter.format(this.totalCheckout(cart))}</h3>
                                    </div>
                                </div>
                                <div class="card borderCardPriceParent paddingCardTotalBottom">
                                    {checkoutItem}
                                </div>
                                <div class="card borderCardPriceParent paddingCardTotalBottom">
                                    <div className="row">
                                        <div className="col-7 ">
                                            <div className="finalTotal">Tạm tính</div>
                                            <div className="finalTotal">Giảm giá {this.tagNearNameDiscount(this.temporaryPrice(cart),this.discountPrice(cart))}%</div>
                                            <div className="finalTotal">Phí vận chuyển</div>
                                        </div>
                                        <div className="col-1">
                                            <div className="boderVertical"></div>
                                        </div>
                                        <div className="col-4">
                                            <div className="finalTotal">{formatter.format(this.temporaryPrice(cart))}</div>
                                            <div className="finalTotal">{formatter.format(this.discountPrice(cart))}</div>
                                            <div className="finalTotal">{formatter.format(0)}</div>
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
    totalCheckout = (cart) =>{
        var resultTotal = 0;
        var resultDiscount = 0;
        if(cart.length > 0){
            for(var i = 0 ; i < cart.length ; i++){
                resultTotal += cart[i].total
                resultDiscount += cart[i].totalDiscount
            }
        }
        return resultTotal - resultDiscount;
    }
    resultProductInCart = cart=>{
        var result=0;
        if(cart.length > 0){
            for(var i = 0 ; i < cart.length;i++){
                result = result + cart[i].quantity;
            }
        }
        return result;
    }
    temporaryPrice = cart =>{
        var result = 0
        if(cart.length > 0){
            for(var i = 0 ; i < cart.length ; i++){
                result += cart[i].total
            }
        }
        return result;
    }
    discountPrice = cart =>{
        var result = 0
        if(cart.length > 0){
            for(var i = 0 ; i < cart.length ; i++){
                result += cart[i].totalDiscount
            }
        }
        return result
    }
    tagNearNameDiscount = (temporary,discountPrice)=>{
        var result
        if(discountPrice ===0){
            result = ''
        }
        else{
            result = (discountPrice*100)/temporary
        }
        return result
    }
}

export default Checkout;