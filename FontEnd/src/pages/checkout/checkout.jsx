import React, { Component } from 'react';
import "../checkout/checkout.css";
import { Link } from 'react-router-dom';
import Province from '../../redux/reducers/ProvinceDistrictWard/province';
import District from '../../redux/reducers/ProvinceDistrictWard/district';
import Ward from '../../redux/reducers/ProvinceDistrictWard/ward';
import {
    Button,
    Modal,
    Form,
    Table,
    Carousel
} from "react-bootstrap";
class Checkout extends Component {
    state = {
        closeFormInterCard: false,
        closeFormWallet: false,
        stateDistrict: [],
        stateWard: [],
        initialState: [],
        state: '',
        stateAddress: '',

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    showFormInterCard(value) {
        if (value === false) {
            this.setState({ closeFormInterCard: true });
            this.setState({ closeFormWallet: false });
        }
        else {
            this.setState({ closeFormInterCard: false });
        }

    }
    showFormWallet(value) {
        if (value === false) {
            this.setState({ closeFormWallet: true });
            this.setState({ closeFormInterCard: false });
        }
        else {
            this.setState({ closeFormWallet: false });
        }

    }
    closeFormWalletAndInterCard() {
        this.setState({ closeFormInterCard: false });
        this.setState({ closeFormWallet: false });
    }
    InputOnChangeProvince = (event) => {
        const { value } = event.target;
        var id;
        console.log(value);
        for (var j = 0; j < Province.length; j++) {
            if (Province[j]._name === value) {
                id = Province[j]._id;
                break;
            }
        }
        this.setState({ stateDistrict: this.state.initialState })             //reset lại state District
        this.setState({ stateWard: this.state.initialState })                 //reset lại state Ward
        this.setState({ state: '' })       //reset all state
        var x = [];           //biến để push tạm
        for (var i = 0; i < District.length; i++) {
            if (District[i]._province_id === id) {
                x.push(District[i]);
            }
        }
        this.setState({ stateDistrict: x.sort((a, b) => a._name.localeCompare(b._name)) })
        this.setState({ state: '' })
        console.log(this.state.stateDistrict)
        this.setState({ state: '' })
    }
    InputOnChangeDistrict = (event) => {
        const { value } = event.target;
        var districtId, provinceId;
        console.log(value);
        for (var j = 0; j < District.length; j++) {
            if (District[j]._name === value) {
                districtId = District[j]._id;
                break;
            }
        }
        console.log(districtId);
        console.log(provinceId);
        var x = [];
        for (var i = 0; i < Ward.length; i++) {
            if (Ward[i]._district_id === districtId) {
                x.push(Ward[i]);
            }
        }
        this.setState({ stateWard: x.sort((a, b) => a._name.localeCompare(b._name)) })
        console.log(this.state.stateWard);
        this.setState({ state: '' })

    }
    InputOnChange = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra

        const newUser = { ...this.state.user, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.setState({ users: newUser });
        console.log(this.state.user)
    }
    render() {
        // var provinceTemp = Province.sort((a, b) => a._name - b._name)
        var provinceTemp = Province.sort((a, b) => a._name.localeCompare(b._name))          //sort by name
        console.log(provinceTemp)
        var { checkoutItem, cart } = this.props;
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
        return (

            <div className="backgroundCheckout">
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
                { cart.length > 0 ?
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 ">
                                <form className="backgroundContainerCheckout">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="paddingLable" for="exampleInputEmail1 ">Họ và tên:</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" id="nameUser" placeholder="Họ và tên" onChange={this.InputOnChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="paddingLable" for="exampleInputEmail1 ">Số điện thoại:</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="number" className="form-control" id="phoneUser" placeholder="Số điện thoại" onChange={this.InputOnChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-3">
                                                <label className="paddingLable " for="exampleInputEmail1 ">Tỉnh/Thành phố:</label>
                                            </div>
                                            <div className="col-9 ">
                                                <select className="form-control selectBoxAddress" id="cityUser" onChange={this.InputOnChangeProvince}>
                                                    <option>Tỉnh/Thành phố</option>
                                                    {provinceTemp.map((province, idx) => {
                                                        return (
                                                            <option
                                                                key={province.id}
                                                                value={province._name}
                                                            >
                                                                {province._name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="paddingLable" for="exampleInputEmail1 ">Quận huyện</label>
                                            </div>
                                            <div className="col-md-9">
                                                <select className="form-control selectBoxAddress" id="districtUser" onChange={this.InputOnChangeDistrict}>
                                                    <option>Quận huyện</option>
                                                    {this.state.stateDistrict.map((district, idx) => {
                                                        return (
                                                            <option
                                                                key={district.id}
                                                                value={district._name}
                                                            >
                                                                {district._name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="paddingLable" for="exampleInputEmail1 ">Phường xã</label>
                                            </div>
                                            <div className="col-md-9">
                                                <select className="form-control selectBoxAddress" id="wardsUser">
                                                    <option>Phường xã</option>
                                                    {this.state.stateWard.map((ward, idx) => {
                                                        return (
                                                            <option
                                                                key={ward.id}
                                                                value={ward._name}
                                                            >
                                                                {ward._name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label className="paddingLable" for="exampleInputEmail1 ">Địa chỉ</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control addressDetailHeight" id="addressDetail" onChange={this.InputOnChangeAddress} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                <h3 className="h3Padding">Phương thức thanh toán</h3>
                                <form className="backgroundContainerCheckout">
                                    <div className="custom-control custom-radio paddingBottomRadio">
                                        <input type="radio" id="paymentOnDelivery" name="customRadio" className="custom-control-input" onClick={() => this.closeFormWalletAndInterCard()} />
                                        <label className="custom-control-label" for="paymentOnDelivery">Thanh toán khi nhận hàng</label>
                                    </div>
                                    <div className="custom-control custom-radio paddingBottomRadio">
                                        <input type="radio" id="paymentInternationalCard" name="customRadio" className="custom-control-input" onClick={() => this.showFormInterCard(this.state.closeFormInterCard)} />
                                        <label className="custom-control-label" for="paymentInternationalCard">Thanh toán bằng thẻ quốc tế Visa, Master, JCB</label>
                                    </div>
                                    {this.state.closeFormInterCard ?
                                        <div className="card paddingBottomRadioWalletCard">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-2">

                                                    </div>
                                                    <div className="col-md-4">
                                                        <img className="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/visa-icon.png'))} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img className="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/master-card-icon-13.jpg'))} />
                                                    </div>
                                                    <div className="col-md-2">

                                                    </div>
                                                </div>
                                                <form className="backgroundContainerCheckout1">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <label className="paddingLable" for="exampleInputEmail1 ">Số thẻ:</label>
                                                                <input type="text" className="form-control" id="idCard" placeholder="VD: 4564 5265 2598 4587" />
                                                                <label className="paddingLable" for="exampleInputEmail1 ">Tên in trên thẻ:</label>
                                                                <input type="text" className="form-control" id="nameUserCard" placeholder="VD: NGUYEN VAN A" />
                                                                <label className="paddingLable" for="exampleInputEmail1 ">Ngày hết hạn:</label>
                                                                <input type="text" className="form-control" id="validDate" placeholder="VD: MM/YY" />
                                                                <label className="paddingLable" for="exampleInputEmail1 ">Mã bảo mật:</label>
                                                                <input type="text" className="form-control" id="securityCode" placeholder="VD: 123" />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <div className="container containerBoderVisaCard">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <h2 className="h2Visa">Visa</h2>
                                                                        </div>
                                                                        <div className="col-md-4"></div>
                                                                        <div className="col-md-4"><img className="card-img-top imgSizeVisaCard" src={(require('../../img/checkoutIMG/visa-icon.png'))} /></div>
                                                                    </div>
                                                                    <img className="card-img-top imgChipSize" src={(require('../../img/checkoutIMG/Chip-logo-3C162A3B9B-seeklogo.com.png'))} />

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
                                        </div> : null
                                    }

                                    <div className="custom-control custom-radio paddingBottomRadio">
                                        <input type="radio" id="paymentWithWallet" name="customRadio" className="custom-control-input" onClick={() => this.showFormWallet(this.state.closeFormWallet)} />
                                        <label className="custom-control-label" for="paymentWithWallet">Thanh toán ví online</label>
                                    </div>
                                    {this.state.closeFormWallet ?
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Link to="/"><img className="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG/paypallogo.png'))} /></Link>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Link to="/"><div className="container containerMono"><img className="card-img-top boderimg imgSizeMomo" src={(require('../../img/checkoutIMG/logo-momo.jpg'))} /></div></Link>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Link to="/"><img className="card-img-top boderimg imgSizePayment" src={(require('../../img/checkoutIMG//vnpay-qrcode-1.png'))} /></Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div> : null
                                    }
                                </form>
                            </div>
                            <div className="col-lg-5  ">

                                <div className="container backgroundContainerCheckout fixed">

                                    <div className="card cardShadowTotal">
                                        <div className="card-body">
                                            <h3 className="textCenterTotal textPaddingTotal">Tổng thanh toán</h3>
                                            <h3 className="textCenterTotal textPaddingTotal">{formatter.format(this.totalCheckout(cart))}</h3>
                                        </div>
                                    </div>
                                    <div className="card borderCardPriceParent paddingCardTotalBottom">
                                        {checkoutItem}
                                    </div>
                                    <div className="card borderCardPriceParent paddingCardTotalBottom">
                                        <div className="row">
                                            <div className="col-7 ">
                                                <div className="finalTotal">Tạm tính</div>
                                                <div className="finalTotal">Giảm giá {this.tagNearNameDiscount(this.temporaryPrice(cart), this.discountPrice(cart))}%</div>
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
                    </div> : <div className="container">Chưa có sản phẩm nào trong giỏ hàng! Vui lòng thêm sản phẩm vào giỏ</div>}
                <br />
                <br />
            </div>

        )
    }
    totalCheckout = (cart) => {
        var resultTotal = 0;
        var resultDiscount = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                resultTotal += cart[i].total
                resultDiscount += cart[i].totalDiscount
            }
        }
        return resultTotal - resultDiscount;
    }
    resultProductInCart = cart => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result = result + cart[i].quantity;
            }
        }
        return result;
    }
    temporaryPrice = cart => {
        var result = 0
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result += cart[i].total
            }
        }
        return result;
    }
    discountPrice = cart => {
        var result = 0
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result += cart[i].totalDiscount
            }
        }
        return result
    }
    tagNearNameDiscount = (temporary, discountPrice) => {
        var result
        if (discountPrice === 0) {
            result = ''
        }
        else {
            result = (discountPrice * 100) / temporary
        }
        return result
    }
}

export default Checkout;