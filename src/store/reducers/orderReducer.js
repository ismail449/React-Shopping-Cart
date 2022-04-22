import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from '../actions/types';

export const orderReducer = (state = {order: '',orders: [] }, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
        return {...state, orders: action.payload.orders };
    case CREATE_ORDER:
      return { ...state,order: action.payload.order };
    case CLEAR_ORDER:
      return {...state,order: ''};
    default:
      return state;
  }
};
