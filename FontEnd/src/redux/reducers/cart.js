import * as Types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity, total, check, discount, inputDiscount, totalDiscount, cart } = action;
    var index = -1;     //Không tìm thấy thì index = -1
    switch (action.type) {
        case Types.ADD_TO_CART:
            //index = findProductInCart(state, product);
            index = state.findIndex(x => x.product.id === product.id)
            totalDiscount = 0;
            if (index !== -1) {
                if (state[index].quantity >= 20) {      //Giới hạn số lượng mua là 20 sp một lần mua
                    state[index].quantity = 20;
                }
                else {
                    state[index].quantity += quantity;
                    state[index].total = state[index].quantity * state[index].product.price
                    for (var index = 0; index < state.length; index++) {
                        state[index].totalDiscount = 0;
                    }
                }
            }
            else {
                state.push({
                    product: product,
                    quantity: quantity,
                    total: total,
                    totalDiscount
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.CHANGE_QUANTITY_PRODUCT_IN_CART:
            index = state.findIndex(x => x.product.id === product.id)
            if (check === 1) {
                if (index !== -1) {
                    if (state[index].quantity >= 20) {
                        state[index].quantity = 20;
                    }
                    else {
                        state[index].quantity += 1;
                        state[index].total = state[index].quantity * state[index].product.price
                        for (var index = 0; index < state.length; index++) {
                            state[index].totalDiscount = 0;
                        }
                    }
                }
                else {
                    state.push({
                        product: product,
                        quantity: quantity
                    })
                }
            } else {
                if (index !== -1) {
                    if (state[index].quantity <= 1) {
                        state[index].quantity = 1;
                    }
                    else {
                        state[index].quantity -= 1;
                        state[index].total = state[index].quantity * state[index].product.price
                        for (var index = 0; index < state.length; index++) {
                            state[index].totalDiscount = 0;
                        }
                    }
                }
                else {
                    state.push({
                        product: product,
                        quantity: quantity,
                        total: total
                    })
                }
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.CHANGE_DISCOUNT_IN_CART:
            var isDiscount = 0;
            if (cart.length > 0) {
                for (var i = 0; i < discount.promotion.length; i++) {
                    if (discount.promotion[i].promotionCode === inputDiscount) {
                        isDiscount = discount.promotion[i].promotionValue;
                        break;
                    }
                }
                for (var j = 0; j < cart.length; j++) {
                    cart[j].totalDiscount = (cart[j].total * isDiscount);
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case Types.ON_LOAD_PAGE_CART:
            for(var i = 0; i < cart.length; i++){
                state[i].totalDiscount = 0;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default: return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;     //nguyên tắt -1 là không tìm thấy
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;