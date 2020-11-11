import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actOnLoadProductIsSelect } from '../actions/index';
import queryString from 'query-string';
import ProductDetail from '../../pages/productDetail/productDetail';
import products from '../reducers/products';

class ProductDetailContainer extends Component {
    state = {}
    render() {
        var { products, id } = this.props
        if (products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].id === Number.parseInt(id)) {
                    return (
                        <ProductDetail
                            product={products[i]}
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
        // loadProductIsSelect: (product, id) => {
        //     dispatch(actOnLoadProductIsSelect(product, id));
        // },
    }
}
export default connect(mapStateToProps, mapDispartToProps)(ProductDetailContainer);