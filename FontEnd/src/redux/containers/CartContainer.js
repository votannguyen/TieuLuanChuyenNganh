import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../../pages/cart/cart';
import CartItem from '../../pages/cartItem/cartItem';
import CartResult from '../../pages/cartResult/cartResult';

import * as Message from '../constants/Message';

import { actChangeDiscountInCart, actChangeQuantityProductInCart, actDeleteProductInCart, actOnLoadPromotionInState, actOnLoadThisPage } from '../actions/index';

class CartContainer extends Component {
    state = {}
    render() {
        var { cart, discount, onLoadThisPage, onLoadPromotionInState } = this.props;
        return (
            <Cart 
            cart={cart}
            cartItem={this.showCartItem(cart)} 
            cartResult ={this.showTotalResult(cart, discount)}
            onLoadThisPage = {onLoadThisPage}
            onLoadPromotionInState = {onLoadPromotionInState}
            />
        );
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangQuantityProductInCart, onChangeDiscountInCart } = this.props;
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangQuantityProductInCart={onChangQuantityProductInCart}
                        onChangeDiscountInCart={onChangeDiscountInCart}
                        
                    />
                );
            });
        }
        return result;
    }
    showTotalResult = (cart, discount) => {
        var result = null;
        var { onChangeDiscountInCart } = this.props;
        if(cart.length > 0){
            return(  
                <CartResult 
                    cart={cart}
                    discount={discount}
                    onChangeDiscountInCart={onChangeDiscountInCart}
                />
            )
        }
        return result;
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired

    })).isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        discount: state.discount,

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangQuantityProductInCart: (product, check) => { // check là check cộng hay trừ
            dispatch(actChangeQuantityProductInCart(product, check));
        },
        onChangeDiscountInCart: (discount, inputDiscount, cart) =>{
            dispatch(actChangeDiscountInCart(discount, inputDiscount, cart));
        },
        onLoadThisPage : cart => {
            dispatch(actOnLoadThisPage(cart));
        },
        onLoadPromotionInState: (promotion) =>{
            dispatch(actOnLoadPromotionInState(promotion));
        }
        // onChangeMessage : (message) => {
        //     dispatch(actChangeMessage(message));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
