import {combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import discount from './discount';
import user from './user';
const appReducers = combineReducers({
    products : products,
    cart: cart,
    discount: discount,
    user: user,

});

export default appReducers;