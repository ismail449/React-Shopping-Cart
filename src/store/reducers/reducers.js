import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer
})