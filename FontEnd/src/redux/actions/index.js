import * as Types from '../constants/ActionType';
import * as TypesProduct from '../constants/actTypeProduct';
export const actAddToCart = (product, quantity, total, sizeProduct, totalDiscount) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity,
        total,
        totalDiscount,
        sizeProduct
    }
}
export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MASAGE,
        message
    }
}
export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actChangeQuantityProductInCart = (product, check, idSizeProduct) => {
    return {
        type: Types.CHANGE_QUANTITY_PRODUCT_IN_CART,
        product,
        check,
        idSizeProduct
    }
}
export const actChangeDiscountInCart = (discount, inputDiscount, cart) => {
    return {
        type: Types.CHANGE_DISCOUNT_IN_CART,
        discount,
        inputDiscount,
        cart
    }
}
export const actOnLoadThisPage = cart => {
    return {
        type: Types.ON_LOAD_PAGE_CART,
        cart
    }
}
export const actOnLoadProductIsSelect = (product, index) => {
    return {
        type: Types.ON_LOAD_PRODUCT_IS_SELECT,
        product,
        index

    }
}
export const actOnAddProductToWishList = (product) => {
    return {
        type: Types.ADD_TO_WISH_LIST,
        product
    }
}
export const actOnDeleteProductInWishList = (product) => {
    return {
        type: Types.ADD_TO_WISH_LIST,
        product
    }
}
export const actOnLoadPromotionInState = (promotion) => {
    return {
        type: Types.ON_LOAD_PROMOTION_ON_STATE,
        promotion
    }
}

//Load dữ liệu từ Api
export const actOnloadProductFromApi = (product) => {
    return {
        type: TypesProduct.LOAD_DATA_PRODUCT_FROM_API,
        product
    }
}
//Chọn size cho mỗi sản phẩm
export const actSelectSizeOnProduct = (sizeProduct, idProduct, quantity) => {
    return {
        type: TypesProduct.SELECT_SIZE_ON_PRODUCT,
        sizeProduct,
        idProduct
    }
}