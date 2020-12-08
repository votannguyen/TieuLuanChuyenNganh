import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../pages/productList/productList';
import Product from '../../pages/product/product';
import ProductDetail from '../../pages/productDetail/productDetail';

//Import các props act
import { actAddToCart, actOnLoadProductIsSelect, actOnloadProductFromApi, actSelectSizeOnProduct } from '../actions/index';
import { actAddProductToWishList, actDeleteProductInWishList } from '../actions/ActionWishList';


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
        var { addToCart, loadProductIsSelect, urlBackend, onProductIsSelect, onAddProductToWishList, onDeleteProductInWishList, ownProps } = this.props;
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
                    onAddProductToWishList = {onAddProductToWishList}
                    onDeleteProductInWishList = {onDeleteProductInWishList}
                    idProductInWishList = {this.findIdOnWishList(product.id)}
                    ownProps = {ownProps}
                />
            });
        }
        return result;
    }
    findIdOnWishList(id){           //tìm để lấy id của sản phẩm tron wishList
        var { wishLists } = this.props
        if (wishLists.length > 0) {
            for (var i = 0; i < wishLists.length; i++) {
              if (wishLists[i].idProduct === id) {
                return id;
              }
            }
            return -1;
        }
        return -1;
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
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        urlBackend: state.urlBackend,
        sizeIsSelect: state.sizeIsSelect,
        wishLists: state.wishLists,
        ownProps: ownProps
    }
}
//nếu muốn mua nhiều sản phẩm cùng lúc thì truyền số lượng vào
const mapDispartToProps = (dispatch, props, ownProps) => {
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
        },
        onAddProductToWishList: (idProduct, wishLists) => {
            dispatch(actAddProductToWishList(idProduct, wishLists))
        },
        onDeleteProductInWishList: (idProduct, wishLists) => {
            dispatch(actDeleteProductInWishList(idProduct, wishLists))
        }
        // onChangeMessage : (message) =>{
        //     dispatch(actChangeMessage(message));
        // }
    }
}

export default connect(mapStateToProps, mapDispartToProps)(ProductsContainer);