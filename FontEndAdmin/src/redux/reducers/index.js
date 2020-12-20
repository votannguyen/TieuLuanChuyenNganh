import {combineReducers } from 'redux';

import user from './user';
import product from './product';
import stateImportProductGood from './importGood'
const appReducers = combineReducers({
    user: user,
    product: product,
    stateImportProductGood: stateImportProductGood
});

export default appReducers;