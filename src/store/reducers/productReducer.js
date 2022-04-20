import {
  FETCH_PRODUCTS,
  FILTER_BY_ORDER,
  FILTER_BY_SIZE,
} from '../actions/types';

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.payload,  filteredProducts: action.payload};
    case FILTER_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredProducts: action.payload.products,
      };
    case FILTER_BY_ORDER:
      return {
        ...state,
        order: action.payload.order,
        filteredProducts: action.payload.products,
      };
    default:
      return state;
  }
};
