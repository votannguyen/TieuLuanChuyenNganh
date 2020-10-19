import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../profile/profile.css";

import UserService from '../../services/UserService';
class Profile extends Component {
    state = {
        closeForm: false,
        users:{},
        user: [],

    }
    componentDidMount = ()=> {
        this.loadData();
      }
    loadData = () => {
        UserService.getUser().then((res) => {
          this.setState({ users: res.data.users });
          console.log(this.state.users)
        });
      }
    // closeFormResetPassword(){
    //     this.setState({closeForm: false});
    // }
    showFormResetPassword(value) {
        if (value === false) {
            this.setState({ closeForm: true });
        }
        else {
            this.setState({ closeForm: false });
        }
    }
    changeInfo = ()=>{
        
    }
    render() {
        return (
            <div className="backGroundLayoutProfile" onLoad={this.componentDidMount}>
                <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center data-background-profile">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Thông tin tài khoản</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container alignContainerMain">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="container backGroundCol containerTopANdBottomLeft">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active backGroundNavLink" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Thông tin cá nhân</a>
                                    <a class="nav-link backGroundNavLink" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false">Quản lý đơn hàng</a>
                                    <a class="nav-link backGroundNavLink" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Payment</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container backGroundCol containerTopANdBottomRight">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h3>Thông tin tài khoản</h3>
                                        <form>
                                            <div class="form-group row">
                                                <label for="staticEmail" class="col-sm-2 col-form-label">Họ tên</label>
                                                <div class="col-sm-10">
                                                    <input type="text" readonly class="form-control form-control-Profile inputTemp" id="staticName" value={this.state.users.fullName} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Số điện thoại</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control form-control-Profile " id="inputPassword" placeholder="" value={this.state.users.phone}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control form-control-Profile " id="inputPassword" placeholder="" value={this.state.users.email} disabled />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Giới tính</label>
                                                <div class="col-sm-10">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input mt-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                        <label class="form-check-label mt-2" for="inlineRadio1">Nam</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input mt-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                        <label class="form-check-label mt-2" for="inlineRadio2">Nữ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label">Ngày sinh</label>
                                                <div class="col-sm-10">
                                                    <input type="date" class="form-control form-control-Profile" id="inputDatetime" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div className="col-sm-2"></div>
                                                <div class="col-sm-10">
                                                <div className="btn btn-primary" onClick={this.changeInfo}>Lưu thông tin</div>
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label"></label>
                                                <div class="col-sm-10">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="defaultCheck1" onClick={() => this.showFormResetPassword(this.state.closeForm)} />
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Đổi mật khẩu
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {
                                            this.state.closeForm ?
                                                <form className="resetPassword" id="resetPassword">
                                                    <div class="form-group row">
                                                        <label for="staticEmail" class="col-sm-2 col-form-label">Mật khẩu cũ</label>
                                                        <div class="col-sm-10">
                                                            <input type="password" readonly class="form-control form-control-Profile inputTemp" id="staticName" placeholder="Mật khẩu cũ" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputPassword" class="col-sm-2 col-form-label">Mật khẩu mới</label>
                                                        <div class="col-sm-10">
                                                            <input type="password" class="form-control form-control-Profile" id="inputPassword" placeholder="Mật khẩu mới" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputPassword" class="col-sm-2 col-form-label">Nhập lại</label>
                                                        <div class="col-sm-10">
                                                            <input type="password" class="form-control form-control-Profile" id="inputPassword" placeholder="Nhập lại mật khẩu mới" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-2">

                                                        </div>
                                                        <div className="col-sm-10">
                                                            <div className="btn btn-primary">
                                                                Cập nhật
                                                            </div>
                                                        </div>

                                                    </div>

                                                </form> : null
                                        }
                                    </div>
                                    <div class="tab-pane fade paddingLeftAndRigthOder" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                                        <div className="row paddingRow">
                                            <div className="col-md-2">
                                                <p>Mã đơn hàng</p>
                                            </div>
                                            <div className="col-md-2 PaddingCol-1">
                                                <p>Ngày mua</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>Sản phẩm</p>
                                            </div>
                                            <div className="col-md-2">
                                                <p>Tổng tiền</p>
                                            </div>
                                            <div className="col-md-2">
                                                <p className="pMarginStatusOder">Trạng thái đơn</p>
                                                <p className="pPaddingRight">hàng</p>
                                            </div>
                                        </div>
                                        <hr className="paddingHr"/>
                                        <div className="row paddingRow">
                                            <div className="col-md-2">
                                                <Link className=" fontTextOder LinkColor" to="/invoicedetail">794258369</Link>
                                            </div>
                                            <div className="col-md-2 PaddingCol-1">
                                                <p className=" fontTextOder">10/09/2020</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className=" fontTextOder">Máy Xay Hạt Tiêu Điện Tự Động Homgeek Gắn Đèn LED Ánh Sáng Xanh</p>
                                            </div>
                                            <div className="col-md-2">
                                                <p className=" fontTextOder">197.000.000 đ</p>
                                            </div>
                                            <div className="col-md-2">
                                                <p className="pMarginStatusOder fontTextOder">Giao hàng thành</p>
                                                <p className="pPaddingRight fontTextOder">công</p>
                                            </div>
                                        </div>
                                        <hr className="paddingHr"/>
                                    </div>

                                        
                                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;