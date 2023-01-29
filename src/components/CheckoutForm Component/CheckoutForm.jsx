import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slide from 'react-reveal/Slide';
import OrderModal from './OrderModal';
import {
  CREATE_ORDER,
  CLEAR_CART,
  CLEAR_ORDER,
} from '../../store/actions/types';
import './CheckoutForm.scss';

const CheckoutForm = ({ closeForm, totalPrice }) => {
  const [formState, setFormState] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const order = useSelector((state) => state.order.order);

  const onChange = (name, value) => {
    setFormState((previousState) => ({ ...previousState, [name]: value }));
  };

  const createOrder = async (newOrder) => {
    const response = await fetch(
      'https://react-shopping-cart-server.onrender.com/api/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      },
    );
    const data = await response.json();
    dispatch({
      type: CREATE_ORDER,
      payload: {
        order: data,
      },
    });
    localStorage.clear('cart');
    dispatch({ type: CLEAR_CART });
  };

  const clearOrder = () => {
    dispatch({ type: CLEAR_ORDER });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const orderCart = cart.map((item) => {
      return { quantity: item.quantity, title: item.title };
    });
    const newOrder = {
      name: formState.name,
      email: formState.email,
      total: totalPrice,
      cart: orderCart,
    };
    createOrder(newOrder);
  };
  return (
    <>
      <Slide top cascade>
        <div className="checkout-form">
          <span onClick={closeForm} className="close-icon">
            {' '}
            &times;{' '}
          </span>
          <form onSubmit={onSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                required
                name="name"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                required
                name="email"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
            <div>
              <button type="submit"> Checkout </button>
            </div>
          </form>
        </div>
      </Slide>
      <OrderModal order={order} clearOrder={clearOrder} />
    </>
  );
};

export default CheckoutForm;
