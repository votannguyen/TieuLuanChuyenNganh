import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../pages/productList/productList';
import Product from '../../pages/product/product';
import PropTypes from 'prop-types';
import { actAddToCart, actOnLoadProductIsSelect } from '../actions/index';
import ProductDetail from '../../pages/productDetail/productDetail';


class ProductsContainer extends Component {
    state = {  }
    render() { 
        var { products } = this.props;
        
        return ( 
            <ProductList>
                {this.showProduct(products)}
            </ProductList>
         );
    }
    showProduct(products){
        var result = null;
        var { addToCart, loadProductIsSelect } = this.props;
        if(products.length > 0){
            result = products.map((product, index) =>{
                return <Product
                    key = {index}
                    product = {product}
                    addToCart={addToCart}
                    loadProductIsSelect = {loadProductIsSelect}
                />
            });
        }
        return result;
    }
    showProductDetail(index){
        var {product} = this.props
        return( 
        <ProductDetail 
            index = {index}
            product = {product}
        />
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            color : PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeMessage :PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
//nếu muốn mua nhiều sản phẩm cùng lúc thì truyền số lượng vào
const mapDispartToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actAddToCart(product, 1, product.price));
        },
        loadProductIsSelect: (product, id) => {
            dispatch(actOnLoadProductIsSelect(product, id));
        },
        // onChangeMessage : (message) =>{
        //     dispatch(actChangeMessage(message));
        // }
    }
}
 
export default connect(mapStateToProps, mapDispartToProps)(ProductsContainer);