import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../../pages/productDetail/productDetail';
import { actAddToCart, actSelectSizeOnProduct, actOnloadProductFromApi } from '../actions/index';
import '../../pages/productDetail/productDetail.css'
class ProductDetailContainer extends Component {
    state = {
        productCallAPi: []
    }
    render() {
        var { products, idOnUrl, addToCart, urlBackend, onProductIsSelect, onLoadProductFromApi } = this.props
        var index = this.findIdProOnState(idOnUrl);
        return (
            <ProductDetail
                idProduct={idOnUrl}
                urlBackend={urlBackend.urlBackend}
                product={products.products[index]}
                addToCart={addToCart}
                sizeIsSelect={this.findIdPro(products.products[index].id)}
                onProductIsSelect={onProductIsSelect}           //Khi người dùng chọn sản phẩm
                onLoadProductFromApi={onLoadProductFromApi}
            />
        );
    }
    findIdProOnState = (idOnUrl) => {
        var { products } = this.props.products
        if (products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].id === Number.parseInt(idOnUrl)) {
                    return i;
                }
            }
        }
    }
    findIdPro = (id) => {
        var { sizeIsSelect } = this.props.sizeIsSelect
        if (sizeIsSelect.length > 0) {
            for (var i = 0; i < sizeIsSelect.length; i++) {
                if (sizeIsSelect[i].sizeProduct.productId === id) {
                    console.log(sizeIsSelect)
                    return ({ productSize: sizeIsSelect[i].sizeProduct })
                }
            }
        }
        else return
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        products: state.products,
        idOnUrl: ownProps.match.params.id,
        // id: props.computedMatch.params.id,
        urlBackend: state.urlBackend,
        sizeIsSelect: state.sizeIsSelect
    }
}
const mapDispartToProps = (dispatch, props) => {
    return {
        addToCart: (product, quantity, sizeIsSelect) => {
            dispatch(actAddToCart(product, quantity, product.price, sizeIsSelect));
        },
        onProductIsSelect: (sizeProduct, idProduct) => {
            dispatch(actSelectSizeOnProduct(sizeProduct, idProduct))
        },
        onLoadProductFromApi: (product) => {
            dispatch(actOnloadProductFromApi(product));
        },

        // loadProductIsSelect: (product, id) => {
        //     dispatch(actOnLoadProductIsSelect(product, id));
        // },
    }
}
export default connect(mapStateToProps, mapDispartToProps)(ProductDetailContainer);