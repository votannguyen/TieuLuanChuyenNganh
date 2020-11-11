import {combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import discount from './discount';
const appReducers = combineReducers({
    products : products,
    cart: cart,
    discount: discount,

});

export default appReducers;