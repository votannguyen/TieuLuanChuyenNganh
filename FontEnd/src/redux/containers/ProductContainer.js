import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../pages/productList/productList';
import Product from '../../pages/product/product';
import { actAddToCart, actOnLoadProductIsSelect, actOnloadProductFromApi, actSelectSizeOnProduct } from '../actions/index';
import ProductDetail from '../../pages/productDetail/productDetail';


class ProductsContainer extends Component {
    state = {}
    render() {
        var { products, urlBackend, onLoadProductFromApi } = this.props;

        return (
            <ProductList
                onLoadProductFromApi={onLoadProductFromApi}
                urlBackend={urlBackend.urlBackend}
                showProduct={this.showProduct(products.products)}
            />

        );
    }
    showProduct = (products) => {
        var result = null;
        var { addToCart, loadProductIsSelect, urlBackend, onProductIsSelect } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    urlBackend={urlBackend.urlBackend}
                    addToCart={addToCart}
                    loadProductIsSelect={loadProductIsSelect}
                    onProductIsSelect={onProductIsSelect}           //Khi người dùng chọn sản phẩm
                    sizeIsSelect={this.findIdPro(product.id)}
                />
            });
        }
        return result;
    }
    findIdPro = (id) => {
        var { sizeIsSelect } = this.props.sizeIsSelect
        if (sizeIsSelect.length > 0) {
            for (var i = 0; i < sizeIsSelect.length; i++) {
                if (sizeIsSelect[i].sizeProduct.productId === id) {
                    console.log(sizeIsSelect)
                    return (sizeIsSelect[i].sizeProduct.id)
                }
            }
        }
        else return
    }
    showProductDetail(index) {
        var { product, urlBackend } = this.props
        return (
            <ProductDetail
                index={index}
                urlBackend={urlBackend.urlBackend}
                product={product}
            />
        )
    }
}

// ProductsContainer.propTypes = {
//     products: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             price: PropTypes.number.isRequired,
//             inventory: PropTypes.number.isRequired,
//             color : PropTypes.string.isRequired
//         })
//     ).isRequired,
//     onChangeMessage :PropTypes.func.isRequired
// }
const mapStateToProps = state => {
    return {
        products: state.products,
        urlBackend: state.urlBackend,
        sizeIsSelect: state.sizeIsSelect
    }
}
//nếu muốn mua nhiều sản phẩm cùng lúc thì truyền số lượng vào
const mapDispartToProps = (dispatch, props) => {
    return {
        addToCart: (product, sizeProduct) => {
            dispatch(actAddToCart(product, 1, product.price, sizeProduct));
        },
        loadProductIsSelect: (product, id) => {
            dispatch(actOnLoadProductIsSelect(product, id));
        },
        onLoadProductFromApi: (product) => {
            dispatch(actOnloadProductFromApi(product));
        },
        onProductIsSelect: (sizeProduct, idProduct) => {
            dispatch(actSelectSizeOnProduct(sizeProduct, idProduct))
        }
        // onChangeMessage : (message) =>{
        //     dispatch(actChangeMessage(message));
        // }
    }
}

export default connect(mapStateToProps, mapDispartToProps)(ProductsContainer);