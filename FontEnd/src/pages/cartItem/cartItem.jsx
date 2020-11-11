import React, { Component } from 'react';
import '../cart/cart.css';
import { Link } from 'react-router-dom';
import * as Message from '../../redux/constants/Message';
import './cartItem.css';


class CartItem extends Component {
    state = {
        quantity: '',
        caution: false,
    }
    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        // onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)

    }
    onChangeQuantity = (product, check) => {
        var { onChangQuantityProductInCart } = this.props;
        onChangQuantityProductInCart(product, check);
    }
    plusQuantity = (product, quantity) => {
        if (this.state.caution === true) {
            this.setState({ caution: false });
        }
        else {
            if (quantity >= 20) {
                this.setState({ caution: true });
            }
        }
        this.onChangeQuantity(product, 1) // 1 là cộng
    }
    minusQuantity = (product) => {
        if (this.state.caution === true) {
            this.setState({ caution: false });
        }
        this.onChangeQuantity(product, 0)   //0 là trừ
    }
    render() {
        var { item } = this.props;
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
        return (
            <div class="card boderCard">
                <div class="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img class="card-img-top resizeImage" src={item.product.image} />
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6">
                                    <a className="fontSize_a">
                                        {item.product.name}
                                        <br />
                                    </a>
                                    <p className="pCart pPaddingTop fontSize_p_span">
                                        <span>
                                            Nhóm:
                                                        </span>
                                        <Link className="defaultLink" to="/">{item.product.group}</Link>
                                    </p>
                                    <p className="pCart fontSize_p_span">
                                        <span>
                                            Hãng sản xuất:
                                                        </span>
                                        <Link className="defaultLink" to="/">{item.product.brand}</Link>
                                    </p>
                                    <p className="pCart fontSize_p_span">
                                        <div
                                            className="defaultDelete"
                                            onClick={() => this.onDelete(item.product)}
                                        >Xóa</div>

                                    </p>

                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="fontFamilyPriveCardProduct">{formatter.format(item.product.price)}</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="textQuantity">Số lượng:</p>
                                            <div className="minusButton pInline minusText" onClick={() => this.minusQuantity(item.product)}><i class="fas fa-minus"></i></div>
                                            <input type="text" className="form-control pInline textBoxSize" id="quantityProduct" value={item.quantity} disabled />
                                            <div className="plusButton pInline plusText" onClick={() => this.plusQuantity(item.product, item.quantity)}><i class="fas fa-plus"></i></div>
                                            {this.state.caution ? <div>Xin lỗi số lượng tối đa mua được là 20 sản phẩm</div> : null}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;