import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../container/header';
import { actLogoutByUser } from '../actions/ActionLogin';
class HeaderContainer extends Component {
    state = {}
    render() {
        var { cart, user, onUserLogout, wishLists } = this.props
        return (
            <Header
                user={user}
                cart={cart}
                onUserLogout={onUserLogout}
                countInWishList={this.countProductInWishList(wishLists)}
            />
        );
    }
    countProductInWishList = (wishLists) => {
        if (wishLists.length > 0) {
            return wishLists.length;
        }
        return 0;
    }
}
HeaderContainer.propTypes = {
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
        user: state.user,
        wishLists: state.wishLists
    }
}
const mapDispartToProps = (dispatch, props) => {
    return {
        onUserLogout: () => {
            dispatch(actLogoutByUser());
        }
    }
}
export default connect(mapStateToProps, mapDispartToProps)(HeaderContainer);