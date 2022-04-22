import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
})