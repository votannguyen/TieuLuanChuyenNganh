import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductDetail from '../../pages/productDetail/productDetail';
import { actAddToCart } from '../actions/index';

class ProductDetailContainer extends Component {
    state = {}
    render() {
        var { products, id, addToCart } = this.props
        if (products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].id === Number.parseInt(id)) {
                    return (
                        <ProductDetail
                            product={products[i]}
                            addToCart = {addToCart}
                        />
                    );
                }
            }
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        id: ownProps.match.params.id
    }
}
const mapDispartToProps = (dispatch, props) => {
    return {
        addToCart: (product, quantity) => {
            dispatch(actAddToCart(product, quantity, product.price));
        },
        // loadProductIsSelect: (product, id) => {
        //     dispatch(actOnLoadProductIsSelect(product, id));
        // },
    }
}
export default connect(mapStateToProps, mapDispartToProps)(ProductDetailContainer);