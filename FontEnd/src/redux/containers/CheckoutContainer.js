import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Checkout from '../../pages/checkout/checkout';
import CheckoutItem from '../../pages/checkout/checkoutItem';
class CheckoutContainer extends Component {
    state = {  }
    render() { 
        var { cart } = this.props;
        return ( 
            <Checkout
                cart = { cart }
                checkoutItem = {this.showCheckoutItem(cart)}
            />
        );
    }
    showCheckoutItem = (cart) => {
        var result;
        // var result = <tr>
        //     <td>
        //         {Message.MSG_CART_EMPTY}
        //     </td>
        // </tr>;
        if (cart.length > 0) {
            result = cart.map((checkoutItem, index) => {
                return (
                    <CheckoutItem
                        key={index}
                        checkoutItem={checkoutItem}
                    />
                );
            });
        }
        return result;
    }
}
CheckoutContainer.propTypes = {
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
        cart: state.cart
    }
}
export default connect(mapStateToProps,null)(CheckoutContainer);