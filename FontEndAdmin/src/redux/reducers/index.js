import {combineReducers } from 'redux';

import user from './user';
import product from './product';
const appReducers = combineReducers({
    user: user,
    product: product,

});

export default appReducers;