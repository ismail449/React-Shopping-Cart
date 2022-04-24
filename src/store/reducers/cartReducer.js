import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/types';

export const cartReducer = (state = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {cart: action.payload};
    case REMOVE_FROM_CART:
      return {cart: action.payload};
    case CLEAR_CART:
      return {cart : []}
    default:
      return state;
  }
};
