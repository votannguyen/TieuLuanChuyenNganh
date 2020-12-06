import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import discount from './discount';
import user from './user';
import urlBackend from './urlBackend';
import sizeIsSelect from './sizeIsSelect';
const appReducers = combineReducers({
    products: products,
    cart: cart,
    discount: discount,
    user: user,
    urlBackend: urlBackend,
    sizeIsSelect: sizeIsSelect,
});

export default appReducers;